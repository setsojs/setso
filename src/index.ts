// Imports

// Local imports
// Import getConfig to get the config defined in setso.config.js
import { getConfig } from "./utils/getConfig.js";
// Import compile function to compile the markdown
import { compile } from "./commands/compile.js";
// Import handleArgs to handle the args
import { handleArgs } from "./utils/handleArgs.js";
// Import type ConfigVar for working with variables
import type { ConfigVar } from "./utils/types.js";

// External imports
// Import cwd to get the current working directory
import { cwd } from "process";
import { argv } from "process";

const config = await getConfig();

// Declare the configuration object that we will give to the compile function.
const configToGive = {
    // Input, defaults to cwd/content
    input: `${cwd()}/content`,
    // Output (out), defaults to cwd/html
    out: `${cwd()}/html`,
    // Title of the html pages, defaults to "setso default title"
    title: "setso default title",
    // If css is present, defaults to false
    css: false,
    // Where the css is located defaults to cwd/css
    cssDir: `${cwd()}/css`,
    // If to be verbose, defaults to false
    verbose: false,
};

// In a try catch block in case the config is not present
try {
    // Gets the .default property
    const configObj: ConfigVar = config;
    if (configObj === undefined) {
        throw new Error(`No config`);
    }

    // If input is not undefined
    if (configObj?.input !== undefined) {
        // Set the variable right
        configToGive.input = `${cwd()}${configObj.input}`;
    }

    // If out is not undefined
    if (configObj?.out !== undefined) {
        // Set the variable right
        configToGive.out = `${cwd()}${configObj.out}`;
    }

    // If title is not undefined
    if (configObj?.title !== undefined) {
        // Set the variable right
        configToGive.title = configObj.title;
    }

    // If css is true
    if (configObj?.css) {
        // Set the variable right
        configToGive.css = true;
    }

    // If cssDir is not undefined
    if (configObj?.cssDir !== undefined) {
        // Set the variable right
        configToGive.cssDir = `${cwd()}${configObj.cssDir}`;
    }

    // If verbose is true
    if (configObj?.verbose) {
        // Set the variable right
        configToGive.verbose = true;
    }
    // In case the config is not present
} catch {
    const args = handleArgs(argv);
    if (args.get("input") !== undefined) {
        configToGive.input = `${cwd()}${args.get("input")}`;
    }
    if (args.get("out") !== undefined) {
        configToGive.out = `${cwd()}${args.get("out")}`;
    }
    if (args.get("title") !== undefined) {
        configToGive.title = args.get("title");
    }
    if (args.get("css") !== undefined) {
        configToGive.css = args.get("css");
    }
    if (args.get("cssDir") !== undefined) {
        configToGive.cssDir = args.get("cssDir");
    }
    if (args.get("verbose") !== undefined) {
        configToGive.verbose = args.get("verbose");
    }
    // Log it out to the user
    console.log("No setso.config.js passed. Using default");
}

// Compile everything, using the configuration object
await compile(configToGive);
