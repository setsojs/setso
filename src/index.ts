// Imports

// Local Imports
import { compile } from "./parts/compile.js";

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

if (args._.length === 0) {
    if (args["--version"] === undefined) {
        throw new Error("You need to pass an input");
    } else if (args["--version"]) {
        console.log(version);
        exit();
    }
}

const dir = args._[0];
const outDir = typeof args._[1] !== undefined ? args._[1] : "./out";
const isThereCss = args["--css"] !== undefined ? args["--css"] : false;
const cssDir = isThereCss
    ? typeof args._[2] !== undefined
        ? args._[2]
        : "./css"
    : undefined;
const verbose = args["--verbose"] !== undefined ? args["--verbose"] : false;

await compile({
    dir: dir,
    outDir: outDir,
    css: isThereCss,
    cssDir: cssDir,
    verbose: verbose,
});

console.log(args);
