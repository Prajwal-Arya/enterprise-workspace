import { HttpStatus } from '@nestjs/common';
import { AppException } from './app.exception';
import { ErrorCode } from '../codes/error-codes';

export class UserNotFoundException extends AppException {
  constructor(userId: string) {
    super(
      ErrorCode.USER_NOT_FOUND,
      `User '${userId}' was not found.`,
      HttpStatus.NOT_FOUND,
    );
  }
}
