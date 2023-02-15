import { readdir } from "fs/promises";
import { parse } from "path";
import type { PathLike } from "fs";

export async function readInitalDir(dirToRead: PathLike) {
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
