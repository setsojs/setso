import { readdir } from "fs/promises";
import { parse } from "path";
import type { PathLike } from "fs";

/**
 * Returns an array with the filenames of the markdown directory
 *
 * For example:
 *
 * ```js
 * import { readInitialDir } from './utils/readInitialDir.ts'
 *
 * const initialDir = await readInitialDir('./directory')
 * ```
 *
 * @param dirToRead - The directory to read
 *
 * @returns Promise: string[]
 */
export async function readInitialDir(dirToRead: PathLike): Promise<string[]> {
    // Declare initial array
    const dirContentsArr: string[] = [];
    try {
        // We read the directory (ignore variable names)
        const toCompileDirRead = await readdir(dirToRead);
        // we use foreach (not a performance bottleneck, please do not change :) );
        toCompileDirRead.forEach((file) => {
            // If the file ends with .md
            if (parse(file).ext == ".md" || parse(file).ext == ".mdx") {
                // Push it to the filenames array
                dirContentsArr.push(parse(file).name);
            }
        })
    } catch {
        // Throw an error
        throw `${dirToRead} does not exist!`
    }
    // Return the parsed file names for later use
    return dirContentsArr;
}
