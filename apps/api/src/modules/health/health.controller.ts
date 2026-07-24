import { Controller, Get } from '@nestjs/common';
import {
  HealthCheck,
  HealthCheckService,
  HealthIndicatorService,
} from '@nestjs/terminus';
import { PrismaHealthIndicator } from './indicators/prisma-health.indicator';

@Controller({
  path: 'health',
  version: '1',
})
export class HealthController {
  constructor(
    private readonly healthCheckService: HealthCheckService,
    private readonly healthIndicatorService: HealthIndicatorService,
    private readonly prismaHealthIndicator: PrismaHealthIndicator,
  ) {}

  @Get('live')
  @HealthCheck()
  checkLiveness() {
    return this.healthCheckService.check([
      async () => this.healthIndicatorService.check('application').up(),
    ]);
  }

  @Get('ready')
  @HealthCheck()
  checkReadiness() {
    return this.healthCheckService.check([
      () => this.prismaHealthIndicator.isHealthy('database'),
    ]);
  }
}
