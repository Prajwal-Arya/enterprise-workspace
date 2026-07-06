import { HttpStatus } from '@nestjs/common';
import { ErrorCode } from '../codes/error-codes';
import { AppException } from './app.exception';

export class UserNotFoundException extends AppException {
  constructor(userId: string) {
    super(
      ErrorCode.USER_NOT_FOUND,
      `User '${userId}' was not found.`,
      HttpStatus.NOT_FOUND,
    );
  }
}

export class OrganizationNotFoundException extends AppException {
  constructor(organizationId: string) {
    super(
      ErrorCode.ORGANIZATION_NOT_FOUND,
      `Organization '${organizationId}' was not found.`,
      HttpStatus.NOT_FOUND,
    );
  }
}
export class EmailAlreadyExistsException extends AppException {
  constructor(email: string) {
    super(
      ErrorCode.EMAIL_ALREADY_EXISTS,
      `Email '${email}' already exists.`,
      HttpStatus.CONFLICT,
    );
  }
}

export class InvalidCredentialsException extends AppException {
  constructor() {
    super(
      ErrorCode.INVALID_CREDENTIALS,
      'Invalid email or password.',
      HttpStatus.UNAUTHORIZED,
    );
  }
}
