import { Controller, Get } from '@nestjs/common';

@Controller('health-check')
export class HealthCheckController {
  @Get()
  stats() {
    return 'test';
  }
}
