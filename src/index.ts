// Imports

// Local Imports
import { compile } from "./parts/compile.js";
import { getConfigFromFiles } from "./parts/getConfig.js";

// Node imports
import { exit } from "process";

// External Imports
import arg from "arg";

const version = "v1.0.0-beta";

const args = arg({
    "--version": Boolean,
    "--css": Boolean,
    "--verbose": Boolean,
});

const config = await getConfigFromFiles()

if (config === undefined){
console.log("Config File not found. Using args.")
}

if (args._.length === 0) {
    if (args["--version"] === undefined && config?.dir !== undefined) {
        throw new Error("You need to pass an input");
    } else if (args["--version"]) {
        console.log(version);
        exit();
    }
}

const dir = (typeof config?.dir === "undefined") ? args._[0] : config.dir;
const outDir = typeof args._[1] !== undefined 
    ? args._[1] 
    : (
        (typeof config?.outDir === "undefined") 
        ? "./out" 
        : config.outDir
    );
const isThereCss = args["--css"] !== undefined 
    ? args["--css"] 
    : (
        (typeof config?.css !== "undefined")
        ? config.css
        : false
    );
const cssDir = isThereCss 
    ? typeof args._[2] !== undefined
        ? args._[2]
        : (
            (typeof config?.cssDir !== undefined) ?
            config?.cssDir
            : "./css"
        )
    : undefined;
const verbose = args["--verbose"] !== undefined 
    ? args["--verbose"] 
    : (typeof config?.verbose !== "undefined") 
        ? config.verbose
        : false;

await compile({
    dir: dir,
    outDir: outDir,
    css: isThereCss,
    cssDir: cssDir,
    verbose: verbose,
});
