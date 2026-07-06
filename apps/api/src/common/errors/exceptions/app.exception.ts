import { HttpException, HttpStatus } from '@nestjs/common';
import { ErrorCode } from '../codes/error-codes';

export class AppException extends HttpException {
  constructor(
    public readonly code: ErrorCode,
    message: string,
    status: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
    public readonly details?: unknown,
  ) {
    super(
      {
        code,
        message,
        details,
      },
      status,
    );
  }
}
