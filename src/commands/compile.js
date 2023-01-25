import { writeFile, readdir, mkdir, readFile } from "fs/promises"
import { cwd } from "process"
import { parse } from "path"
import { micromark } from "micromark";

export async function compile(toCompile, out){
    let dirContentsArr = [];
    let toComplieDirRead = await readdir(toCompile) 
    toComplieDirRead.forEach((file) => {
      if (parse(file).ext == ".md"){
        dirContentsArr.push(parse(file).name);
      }
    })
    dirContentsArr.forEach(async (htmlFileName) => {
        let contentToWrite = await readFile(`${toCompile}/${htmlFileName}.md`)
        await writeFile(`${out}/${htmlFileName}.html`, micromark(contentToWrite))
    })
}