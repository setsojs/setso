// Imports
// Import fs-extra
import fse from "fs-extra";

// Export an async function witch takes a string as an argument and returns a promise with a boolean
/**
 * Checks if a directory exists
 * 
 * For example:
 * 
 * ```js
 * import { check } from './utils/check.ts'
 * 
 * if (check('./dirToCheck')){
 *     // Do stuff
 * }
 * ```
 * 
 * @param dir - The directory to check.
 * 
 * @returns Promise: boolean
 */
export async function check(dir: string): Promise<boolean> {
    // Try
    try {
        // To read the directory
        await fse.ensureDir(dir);
        // If it exists, return true to indicate that it's present.
        return true;
        // Otherwise
    } catch (err) {
        // Return false to indicate that it's not present and we need to create it
        return false;
    }
}
