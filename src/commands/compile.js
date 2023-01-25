import { writeFile, readdir, mkdir, readFile } from "fs/promises"
import { parse } from "path"
import { micromark } from "micromark";
import { check } from "../utils/check";

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
        if (check(out)){
            await writeFile(`${out}/${htmlFileName}.html`, micromark(contentToWrite))
        } else {
          await mkdir(out)
          await writeFile(`${out}/${htmlFileName}.html`, micromark(contentToWrite))
        }
    })
}