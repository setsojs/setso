// Build a recursive directory scanner

import { readdir, lstat } from "fs/promises";

export async function* recursiveDirectoryScanner(directory: string): AsyncIterable<string> {
    const files = await readdir(directory);   
    for (const file of files) {
        const path = `${directory}/${file}`;
        const stat = await lstat(path);
        if (stat.isDirectory()) {
            yield* recursiveDirectoryScanner(path);
        } else {
            yield path;
       }    
    }
}

async function getArr(directory: string){
    const arr = []
    const iterab = await recursiveDirectoryScanner(directory)
    for await(const el of iterab) arr.push(el.replace(directory, ""))
    return arr;
}

console.log(await getArr("./test"))
