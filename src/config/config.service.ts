import * as Joi from '@hapi/joi';
import { config } from 'dotenv';

config();

export interface EnvConfig {
  [key: string]: string;
}

export enum DatabaseConnectionType {
  mysql = 'mysql',
  postgres = 'postgres',
}

export class ConfigService {
  private readonly envConfig: EnvConfig;

  constructor() {
    this.envConfig = ConfigService.validateInput(process.env);
  }

  loadFromVault(): EnvConfig {
    return {};
  }

  private static validateInput(envConfig: EnvConfig): EnvConfig {
    const envVarsSchema: Joi.ObjectSchema = Joi.object({
      NODE_ENV: Joi.string()
        .valid('development', 'production', 'test', 'staging')
        .default('development'),
      POSTGRES_HOST: Joi.string(),
      POSTGRES_PORT: Joi.number().default(3306),
      POSTGRES_USERNAME: Joi.string(),
      POSTGRES_PASSWORD: Joi.string(),
      POSTGRES_DATABASE: Joi.string(),
      POSTGRES_SYNCHRONIZE: Joi.bool().default(false),
    }).unknown();

    const { error, value: validatedEnvConfig } = envVarsSchema.validate(
      envConfig,
    );

    if (error) {
      throw new Error(`Config validation error: ${error.message}`);
    }

    return validatedEnvConfig;
  }

  public get configs() {
    return this.envConfig;
  }

  public get isProduction(): boolean {
    return this.envConfig.NODE_ENV === 'production';
  }

  public get isTest(): boolean {
    return this.envConfig.NODE_ENV === 'test';
  }

  public get isStaging(): boolean {
    return this.envConfig.NODE_ENV === 'staging';
  }

  public get port() {
    return Number(this.envConfig.APP_PORT);
  }

  public get version(): string {
    return String('0.0.1');
  }

  public get(key: string): string {
    return this.envConfig[key];
  }

  public get connection(): 'mysql' | 'postgres' {
    const type = this.envConfig.POSTGRES_CONNECTION;
    return DatabaseConnectionType[type];
  }

  public getNumber(key: string): number {
    return Number(this.envConfig[key]);
  }

  public getBoolean(key: string): boolean {
    if (this.envConfig[key] === 'false') {
      return false;
    }
    return Boolean(this.envConfig[key]);
  }
}
