// Imports

// Node Imports
import { readdir, lstat } from "fs/promises";
import { parse } from "path";

/**
 * Recursivly scans a directory to chech if there are .md or .mdx extensions
 * 
 * 
 * @param dir The initial directory to start scanning from
 * @param verbose Wheather to Be Verbose Or Not
 * @returns A Set strings containig the full paths of every file scanned that ends with .md or .mdx
 */
export async function readInitialDir(dir: string, verbose: boolean): Promise<Set<string>> {
    if (verbose){
        console.log("Reading Files...")
    }
    async function* readDir(directory: string): AsyncGenerator<string> {
        const files = await readdir(directory);
        for (const file of files) {
            const path = `${directory}/${file}`;
            const stat = await lstat(path);
            if (stat.isDirectory()) {
                yield* readDir(path);
            } else {
                // check if file is markdown or mdx
                if (parse(path).ext === ".md" || parse(path).ext === ".mdx") {
                    yield path;
                } else {
                    continue;
                }
            }
        }
    }
    const dirArr = new Set<string>([]);

    for await (const el of readDir(dir)) {
        dirArr.add(el);
    }
    return dirArr;
}
