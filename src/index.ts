// Imports

// Local imports
// Import getConfig to get the config defined in setso.config.js
import { getConfig } from "./utils/getConfig.js";
// Import compile function to compile the markdown
import { compile } from "./commands/compile.js";

// External imports
// Import cwd to get the current working direcotry
import { cwd } from "process";

// Get the config fro getConfig
const config = await getConfig();

// Declare some variables as defaults
// Input, defaults to cwd/content
let input = `${cwd()}/content`;
// Output (out), defaults to cwd/html
let out = `${cwd()}/html`;
// Title of the html pages, defaults to "setso default title"
let title = "setso default title";
// If css is present, defaults to false
let css = false;
// Where the css is located defaults to cwd/css
let cssDir = `${cwd()}/css`;
// If to be verbose, defaults to false
let verbose = false;

// In a try catch block in case the config is not present 
try {
    // Gets the .default property
    const configObj = config.default;

    // If input is not undefined
    if (configObj.input !== undefined) {
        // Set the variable right
        input = `${cwd()}${config.default.input}`;
    }

    // If out is not undefined
    if (configObj.out !== undefined) {
        // Set the variable right
        out = `${cwd()}${config.default.out}`;
    }

    // If title is not undefined
    if (configObj.title !== undefined) {
        // Set the variable right
        title = configObj.title;
    }

    // If css is true
    if (configObj.css) {
        // Set the variable right
        css = true;
    }

    // If cssDir is not undefined
    if (configObj.cssDir !== undefined) {
        // Set the variable right
        cssDir = `${cwd()}${config.default.cssDir}`;
    }

    // If verbose is true
    if (configObj.verbose) {
        // Set the variable right
        verbose = true;
    }
// In case the config is not present
} catch {
    // Log it out to the user
    console.log("No setso.config.js passed. Using default");
}

// Compile everything, using the variables that are given
await compile(input, out, title, css, cssDir, verbose);
