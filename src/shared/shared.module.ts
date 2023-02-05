import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import validationSchema from './config/envs.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      validationSchema,
      validationOptions: {
        abortEarly: true,
        allowUnknown: true,
        stripUnknown: true,
      },
    }),
  ],
})
export class SharedModule {}
