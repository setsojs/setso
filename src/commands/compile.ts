// Imports

// Local imports

// Import start and end to get the markdown
import { start, end } from "../utils/startAndEnd.js";
// Import handleCss to handle the css if it's needed
import { fullCssHandle } from "../utils/handleCss.js";
// Import readIntialDir to read the directory to then compile from
import { getArr } from "../utils/readInitialDir.js";
// Import handleTitle to get the right title
import { handleTitle } from "../utils/handleTitle.js";
// Import handleMd to handle markdown
import { handleMd } from "../utils/handleMd.js";
// Import finalWrite to write to the html files
import { finalWrite } from "../utils/toWrite.js";

// External imports

// readFile from fs/promises to read the markdown files.
import { readFile } from "fs/promises";
// Import parse from path to parse the paths and get the names and extensions
import { parse } from "path";

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
    const dirContentsArr: string[] = await getArr(configObj.input);
    console.log(dirContentsArr)
    // If the verbose options is active
    if (configObj.verbose) {
        // Log what we are doing
        console.log(`Reading ${configObj.input}`);
    }
    for (const file in dirContentsArr){
        const pathInQuestion = dirContentsArr[file].replace("/", "")
        if (configObj.verbose) {
            // Log what we are doing
            console.log(`Compiling ${pathInQuestion}`);
        }
        try {
            const contentToWrite = await readFile(
                `${configObj.input}/${pathInQuestion}`
            );
            if (configObj.css) { 
                const cssString = await fullCssHandle(configObj.verbose, configObj.cssDir, pathInQuestion)
                const toWrite = `
                ${start(handleTitle(configObj.title, pathInQuestion))}
                    ${cssString}
                    ${handleMd(contentToWrite.toString("utf8"))}
                ${end()}
                `;
                await finalWrite(`${configObj.out}/${parse(pathInQuestion).name}.html`, toWrite)
            }
        } catch {
            throw new Error("Path in question does not exist!")
        }
    }        

}
