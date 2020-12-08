import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { ConfigService } from './config.service';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get('POSTGRES_HOST'),
      port: this.configService.getNumber('POSTGRES_PORT'),
      username: this.configService.get('POSTGRES_USERNAME'),
      password: this.configService.get('POSTGRES_PASSWORD'),
      database: this.configService.get('POSTGRES_DATABASE'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      logger: 'advanced-console',
      logging:
        this.configService.isTest || this.configService.isStaging
          ? 'all'
          : ['error'],
      synchronize: this.configService.getBoolean('POSTGRES_SYNCHRONIZE'),
      cache: {
        type: 'redis',
        options: {
          host: this.configService.get('REDIS_URL'),
          port: this.configService.get('REDIS_PORT'),
        },
      },
    };
  }
}
