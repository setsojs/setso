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
export async function readInitalDir(dirToRead: PathLike): Promise<string[]> {
    const dirContentsArr: string[] = [];
    // We read the directory (ignore variable names)
    const toComplieDirRead = await readdir(dirToRead);
    // we use foreach (not a performance bottleneck, please do not change :) )
    toComplieDirRead.forEach((file) => {
        // If the file ends with .md
        if (parse(file).ext == ".md") {
            // Push it to the filenames array
            dirContentsArr.push(parse(file).name);
        }
    });
    return dirContentsArr;
}
