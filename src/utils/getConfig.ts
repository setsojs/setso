// Imports
// Import cwd from process to get the current working directory
import { cwd } from "process";

// Export an async functions that return a Promise<any> (sigh)
export async function getConfig(): Promise<any> {
    // Try
    try {
        // to import the config, and return the object
        const config = await import(`${cwd()}/setso.config.js`);
        return config;
    // If no config is found
    } catch {
        // Log the err.
        console.log("No config found");
    }
}
