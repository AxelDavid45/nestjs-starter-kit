import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { SharedModule } from './shared/shared.module';
import { HealthCheckModule } from './health-check/health-check.module';

@Module({

  imports: [AuthModule, SharedModule, HealthCheckModule]
})
export class AppModule {}
