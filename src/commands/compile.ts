// Imports
// Local imports
// Import check to check if a directory exists
import { check } from "../utils/check.js";
// Import start and end to get the markdown
import { start, end } from "../utils/startAndEnd.js";
// Import handleCss to handle the css if it's needed
import { handleCss } from "../utils/handleCss.js";

// External imports
// Import writeFile, readdir, mkdir, readFile from fs/promises (i'm not writing why)
import { writeFile, readdir, mkdir, readFile } from "fs/promises";
// Import parse from path to parse the paths and get the names and extensions
import { parse } from "path";
// Import micromark to compile makrdown to html
import { micromark } from "micromark";

// The css string. Just if something goes wrong.
let cssString = `
    <style></style>
`;

// Exported async function witch takes 4 strings and 2 booleans and returns void  
export async function compile(
    toCompile: string,
    out: string,
    title: string,
    css: boolean,
    cssDir: string,
    verbose: boolean
): Promise<void> {
    // Declare an empty array for the files in the markdown directory
    const dirContentsArr: string[] = [];
    // If the verbose options is active
    if (verbose) {
        // Log what we are doing
        console.log(`Reading ${toCompile}`);
    }
    // We read the directory (ignore variable names)
    const toComplieDirRead = await readdir(toCompile);
    // we use foreach (not a performance bottleneck, please do not change :) )
    toComplieDirRead.forEach((file) => {
        // If the file ends with .md
        if (parse(file).ext == ".md") {
            // Push it to the filenames array 
            dirContentsArr.push(parse(file).name);
        }
    });
    // We use foreach on the previous array
    dirContentsArr.forEach(async (htmlFileName) => {
        // If the verbose options is active
        if (verbose) {
            // Log what we are doing
            console.log(`Compiling ${htmlFileName}.md`);
        }
        // We read the md file
        const contentToWrite = await readFile(
            `${toCompile}/${htmlFileName}.md`
        );
        // If css is enabled
        if (css === true) {
            // If the verbose options is active
            if (verbose) {
                // Log what we are doing
                console.log(`Getting css from ${cssDir}`);
            }
            // Get css to inject later
            cssString = await handleCss(cssDir, parse(htmlFileName).name);
        }
        // Prepare the markup to inject
        const toWrtie = `
${start(title)}
${cssString}
    ${micromark(contentToWrite)}
${end()}
        `;
        // If the output directory exists
        if (await check(out)) {
            // We just write the file
            await writeFile(`${out}/${htmlFileName}.html`, toWrtie);
        // Else
        } else {
            // We create the directory
            await mkdir(out);
            // We then write out the file
            await writeFile(`${out}/${htmlFileName}.html`, toWrtie);
        }
    });
}
