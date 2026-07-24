import { Body, Controller, Post } from '@nestjs/common';
import { PasswordService } from '../services';

@Controller({
  path: 'password',
  version: '1',
})
export class PasswordTestController {
  constructor(private readonly passwordService: PasswordService) {}

  @Post('hash')
  async hash(@Body() body: { password: string }) {
    const hash = await this.passwordService.hash(body.password);

    return { hash };
  }

  @Post('verify')
  async verify(
    @Body()
    body: {
      password: string;
      hash: string;
    },
  ) {
    const valid = await this.passwordService.verify(body.hash, body.password);

    return { valid };
  }
}
