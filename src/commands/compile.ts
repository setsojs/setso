// Imports
// Local imports
// Import check to check if a directory exists
import { check } from "../utils/check.js";
// Import start and end to get the markdown
import { start, end } from "../utils/startAndEnd.js";
// Import handleCss to handle the css if it's needed
import { handleCss } from "../utils/handleCss.js";
// Import readIntialDir to read the directory to then compile from
import { readInitalDir } from "../utils/readInitialDir.js";

// External imports
// Import writeFile, mkdir, readFile from fs/promises (i'm not writing why)
import { writeFile, mkdir, readFile } from "fs/promises";
// Import parse from path to parse the paths and get the names and extensions
import { parse } from "path";
// Import micromark to compile makrdown to html
import { micromark } from "micromark";

// The css string. Just if something goes wrong.
let cssString = `
    <style></style>
`;

// Exported async function witch takes an object with the required properties.
/**
 * Compiles everything
 *
 * For example:
 *
 * ```js
 * import { compile } from './utils/check.ts'
 *
 * await compile({
 *  // Config obj.
 * })
 *
 * ```
 *
 * @param configObj - The configuration object.
 *
 * @returns Promise: boolean
 */
export async function compile(configObj: {
    input: string;
    out: string;
    title: string;
    css: boolean;
    cssDir: string;
    verbose: boolean;
}): Promise<void> {
    // Declare an empty array for the files in the markdown directory
    const dirContentsArr: string[] = await readInitalDir(configObj.input);
    // If the verbose options is active
    if (configObj.verbose) {
        // Log what we are doing
        console.log(`Reading ${configObj.input}`);
    }
    // We read the directory (ignore variable names)
    // We use foreach on the previous array
    dirContentsArr.forEach(async (htmlFileName) => {
        // If the verbose options is active
        if (configObj.verbose) {
            // Log what we are doing
            console.log(`Compiling ${htmlFileName}.md`);
        }
        // We read the md file
        const contentToWrite = await readFile(
            `${configObj.input}/${htmlFileName}.md`
        );
        // If css is enabled
        if (configObj.css === true) {
            // If the verbose options is active
            if (configObj.verbose) {
                // Log what we are doing
                console.log(`Getting css from ${configObj.cssDir}`);
            }
            // Get css to inject later
            cssString = await handleCss(
                configObj.cssDir,
                parse(htmlFileName).name
            );
        }
        let toWrite;
        if (typeof configObj.title == 'object'){
            if (parse(htmlFileName).name in configObj.title){
                toWrite = `
    ${start(configObj.title[parse(htmlFileName).name])}
    ${cssString}
        ${micromark(contentToWrite)}
    ${end()}
            `;
            } else {
                toWrite = `
    ${start('Setso default title')}
    ${cssString}
        ${micromark(contentToWrite)}
    ${end()}
            `;   
            }
        } else {
            toWrite = `
    ${start(configObj.title)}
    ${cssString}
        ${micromark(contentToWrite)}
    ${end()}
            `;
        }
        // Prepare the markup to inject
        // If the output directory exists
        if (await check(configObj.out)) {
            // We just write the file
            await writeFile(`${configObj.out}/${htmlFileName}.html`, toWrite);
            // Else
        } else {
            // We create the directory
            await mkdir(configObj.out);
            // We then write out the file
            await writeFile(`${configObj.out}/${htmlFileName}.html`, toWrite);
        }
    });
}
