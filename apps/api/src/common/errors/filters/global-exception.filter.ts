import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Request, Response } from 'express';
import { ErrorCode } from '../codes/error-codes';
import { AppException } from '../exceptions/app.exception';
import { ErrorResponse } from '../interfaces/error-response.interface';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const traceId = randomUUID();

    const statusCode =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const errorPayload = this.getErrorPayload(exception);

    const body: ErrorResponse = {
      success: false,
      error: {
        code: errorPayload.code,
        message: errorPayload.message,
        statusCode,
        timestamp: new Date().toISOString(),
        path: request.url,
        traceId,
        ...(errorPayload.details ? { details: errorPayload.details } : {}),
      },
    };

    if (statusCode >= 500) {
      console.error({
        traceId,
        path: request.url,
        method: request.method,
        exception,
      });
    }

    response.status(statusCode).json(body);
  }

  private getErrorPayload(exception: unknown): {
    code: string;
    message: string;
    details?: unknown;
  } {
    if (exception instanceof AppException) {
      const response = exception.getResponse() as {
        code: string;
        message: string;
        details?: unknown;
      };

      return {
        code: response.code,
        message: response.message,
        details: response.details,
      };
    }

    if (exception instanceof HttpException) {
      const response = exception.getResponse();

      if (typeof response === 'string') {
        return {
          code: this.mapStatusToCode(exception.getStatus()),
          message: response,
        };
      }

      const responseObject = response as {
        message?: string | string[];
        error?: string;
        statusCode?: number;
      };

      return {
        code: this.mapStatusToCode(exception.getStatus()),
        message: Array.isArray(responseObject.message)
          ? 'Validation failed'
          : responseObject.message || responseObject.error || 'Request failed',
        details: Array.isArray(responseObject.message)
          ? responseObject.message
          : undefined,
      };
    }

    return {
      code: ErrorCode.INTERNAL_SERVER_ERROR,
      message: 'Internal server error',
    };
  }

  private mapStatusToCode(status: number): ErrorCode {
    switch (status) {
      case HttpStatus.BAD_REQUEST:
        return ErrorCode.VALIDATION_ERROR;
      case HttpStatus.UNAUTHORIZED:
        return ErrorCode.UNAUTHORIZED;
      case HttpStatus.FORBIDDEN:
        return ErrorCode.FORBIDDEN;
      case HttpStatus.NOT_FOUND:
        return ErrorCode.NOT_FOUND;
      case HttpStatus.CONFLICT:
        return ErrorCode.CONFLICT;
      default:
        return ErrorCode.INTERNAL_SERVER_ERROR;
    }
  }
}
