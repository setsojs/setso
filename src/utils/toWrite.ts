import { dirExists } from "dir-exists-safe";
import { mkdir, writeFile } from "fs/promises";

export async function finalWrite(toWriteDir: string, toWrite: string){
    if (!(await dirExists(toWriteDir))){
        await mkdir(toWriteDir)
        await writeFile(toWriteDir, toWrite)
    } else {
        await writeFile(toWriteDir, toWrite)
    }
}