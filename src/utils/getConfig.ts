// Imports
// Import cwd from process to get the current working directory
import { cwd } from "process";
import { Config } from "./types.js";

// Export an async functions that return a Promise<Config | undefined>
/**
 * Returns the config in setso.config.js
 *
 * For example:
 *
 * ```js
 * import { getConfig } from './utils/getConfig.ts'
 *
 * const config = await getConfig()
 * ```
 *
 * @returns Promise: any
 */
export async function getConfig(): Promise<Config | undefined> {
    // Try
    try {
        // to import the config, and return the object
        const config = await import(`${cwd()}/setso.config.js`);
        return config.default;
        // If no config is found
    } catch {
        // Log the err.
        console.log("No config found");
    }
}
