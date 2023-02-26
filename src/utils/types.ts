// Some types for better dx

/**
 * Returns a type to use when working with setso.config.js (for better dx)
 *
 * For example:
 *
 * ```ts
 * import type { Config } from './utils/types.ts'
 *
 *
 * function getConfig(): Promise<Config | undefined>{
 *  // Read and return the config
 * }
 * ```
 *
 * @returns Type: Config
 *
 */
export type Config = {
    input: string;
    out: string | undefined;
    title: string | undefined;
    css: boolean | undefined;
    cssDir: string | undefined;
    verbose: boolean | undefined;
};

/**
 * Returns a union type to use when working with the config variable
 *
 * For example:
 *
 * ```ts
 * import type { ConfigVar } from './utils/types.ts'
 * import { getConfig } from './utils/getConfig.ts'
 *
 *
 * let configObj: ConfigVar = await getConfig()
 *
 * ```
 *
 * @returns Type: Config | undefined
 */
export type ConfigVar = Config | undefined;
