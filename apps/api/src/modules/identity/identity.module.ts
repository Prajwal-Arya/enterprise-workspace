import { Module } from '@nestjs/common';
import { PasswordService, TokenService } from './services';
import { PasswordTestController } from './controllers/password-test.controller';

@Module({
  controllers: [PasswordTestController],
  providers: [PasswordService, TokenService],
  exports: [PasswordService, TokenService],
})
export class IdentityModule {}
