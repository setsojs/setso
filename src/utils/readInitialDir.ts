import { readdir, lstat } from "fs/promises";
import { parse } from "path";

async function* recursiveDirectoryScanner(directory: string): AsyncIterable<string> {
    const files = await readdir(directory);   
    for (const file of files) {
        const path = `${directory}/${file}`;
        const stat = await lstat(path);
        if (stat.isDirectory()) {
            yield* recursiveDirectoryScanner(path);
        } else {
            // check if file is markdown or mdx
            if (parse(path).ext === ".md" || parse(path).ext === ".mdx"){
                yield path;
            } else {
                continue;
            }
       }    
    }
}

export async function getArr(directory: string): Promise<string[]> {
    const arr = []
    const iterab = await recursiveDirectoryScanner(directory)
    for await(const el of iterab) arr.push(el.replace(directory, ""))
    console.log(arr)
    
    return arr;
}

console.log(await getArr("./test"))

