// Imports

// Node Imports
import { mkdir, writeFile } from "fs/promises";
import { join, parse } from "path";

// External Imports
import { dirExists } from "dir-exists-safe";

/**
 * 
 * Writes the html to the corresponding filename
 * 
 * @param filename The Filename of the markdown file
 * @param html The Compiled Html
 * @param outDir The Directory to output to
 * @param verbose If To Be verbose or not
 * 
 * @async
 */
export async function writeHtml(
    filename: string,
    html: string,
    outDir: string,
    verbose: boolean
): Promise<void> {
    const filenameNoExt = parse(filename).name;
    const toWriteToArray = parse(filename).dir.split("/");
    toWriteToArray[1] = outDir.replace("./", "");
    if (!(await dirExists(join(...toWriteToArray)))) {
        await mkdir(join(...toWriteToArray));
        const toWriteTo =
            "./" + join(...toWriteToArray, filenameNoExt + ".html");
        if (verbose){
                console.log(`Wrting to ${toWriteTo}`)
        }
        await writeFile(toWriteTo, html);
    } else {
        const toWriteTo =
            "./" + join(...toWriteToArray, filenameNoExt + ".html");
        if (verbose){
                console.log(`Wrting to ${toWriteTo}`)
        }
        await writeFile(toWriteTo, html);
    }
}
