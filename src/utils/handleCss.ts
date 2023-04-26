// Imports
// External imports
// Import readdir to read the css directory, and read file to read the cssFiles from fs/promises to use async/await
import { readdir, readFile } from "fs/promises";
// Import parse from path to parse the paths and get the names and extensions
import { parse } from "path";

// Type imports
// Import the 'PathLike' type from fs for the function
import type { PathLike } from "fs";

// To return, in case there is an error/no css to write to the html file.
const toReturn = `
<style>
</style>
`;
// The sass object that we will import later
let sass;

async function readCss(filename: PathLike): Promise<string> {
    const toWrite = await readFile(filename, {
        encoding: "utf8",
    });
    return toWrite;
}

/**
 * Returns the css string to inject into the html
 *
 * For example:
 *
 * ```js
 * import { handleCss } from './utils/handleCss.ts'
 *
 * const cssString = await handleCss('./css', 'main')
 * ```
 *
 * @param cssDir - The css directory to scan
 * @param fileNameNoExt - The filename of the html without the extension
 *
 * @returns Promise: string
 */
// Exported async function that takes a PathLike and a string
export async function handleCss(
    cssDir: PathLike,
    fileNameNoExt: string
): Promise<string> {
    // We read the css directory
    const cssDirForEach = await readdir(cssDir);
    // We loop over every element
    for (const element in cssDirForEach) {
        // If the css filename is equal to the corresponding md file and that it ends with .css then
        if (
            parse(cssDirForEach[element]).name == fileNameNoExt &&
            cssDirForEach[element].endsWith(".css")
        ) {
            // read the corresponding file
            const toWrite = await readCss(
                `${cssDir}/${cssDirForEach[element]}`
            );
            // Return the thing to write
            return `
    <style>
      ${toWrite}
    </style>
          `;
            // Else if the css filename is equal to the corresponding md file and that it ends with .scss (sass) then
        } else if (
            (parse(cssDirForEach[element]).name == fileNameNoExt &&
                cssDirForEach[element].endsWith(".scss")) ||
            cssDirForEach[element].endsWith(".sass")
        ) {
            // Try
            try {
                // to import sass using the previous declared variable
                sass = await import("sass");
                // Catch
            } catch (err) {
                // the error if sass is not installed.
                throw "Due to a bug with sass, you will have to install it using npm install -D sass";
            }
            // We then compile the sass into css
            const result = await sass.default.compileAsync(
                `${cssDir}/${cssDirForEach[element]}`
            );
            // and return it
            return `
    <style>
      ${result.css}
    </style>
          `;
        } else if (
            cssDirForEach[element] == "*.css" ||
            cssDirForEach[element] == "global.css"
        ) {
            const toWrite = await readCss(
                `${cssDir}/${cssDirForEach[element]}`
            );
            // Return the thing to write
            return `
    <style>
      ${toWrite}
    </style>
          `;
        } else if (
            cssDirForEach[element] == "*.scss" ||
            cssDirForEach[element] == "global.scss"
        ) {
            // Try
            try {
                // to import sass using the previous declared variable
                sass = await import("sass");
                // Catch
            } catch (err) {
                // the error if sass is not installed.
                throw "Due to a bug with sass, you will have to install it using npm install -D sass";
            }
            // We then compile the sass into css
            const result = await sass.default.compileAsync(
                `${cssDir}/${cssDirForEach[element]}`
            );
            // Return the thing to write
            return `
    <style>
      ${result.css}
    </style>
          `;
        }
    }
    // If all else fails, return an empty string
    return toReturn;
}

export async function fullCssHandle(isVerbose: boolean, cssDir: string, pathInQuestion: string){
    if (isVerbose) {
        // Log what we are doing
        console.log(`Getting css from ${cssDir}`);
    }
    // Read css to inject later
    const cssString = await handleCss(
        cssDir,
        parse(pathInQuestion).name
    );
    // Return the cssString
    return cssString;
}

