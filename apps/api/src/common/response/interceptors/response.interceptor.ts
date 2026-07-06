import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response.interface';

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor<
  T,
  ApiResponse<T>
> {
  intercept(
    _context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponse<T>> {
    return next.handle().pipe(
      map((data: T) => {
        if (this.isAlreadyFormatted(data)) {
          return data as ApiResponse<T>;
        }

        return {
          success: true,
          data,
        };
      }),
    );
  }

  private isAlreadyFormatted(data: unknown): data is ApiResponse {
    return (
      typeof data === 'object' &&
      data !== null &&
      'success' in data &&
      (data as { success?: unknown }).success === true &&
      'data' in data
    );
  }
}
