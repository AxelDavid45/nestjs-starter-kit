import { NodeEnv } from './node-envs';

/*
  Use this interface to define a type when using ConfigService
  @example
  // Access only declare keys
  ConfigService.get<EnvVariablesInterface>('NODE_ENV')
 */
export interface EnvVariablesInterface {
  PORT: number;
  NODE_ENV: NodeEnv;
}
