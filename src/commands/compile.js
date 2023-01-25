import { writeFile, readdir, mkdir, readFile } from "fs/promises";
import { parse } from "path";
import { micromark } from "micromark";
import { check } from "../utils/check";
import { start, end } from "../utils/startAndEnd.js";

export async function compile(toCompile, out, title) {
    let dirContentsArr = [];
    let toComplieDirRead = await readdir(toCompile);
    toComplieDirRead.forEach((file) => {
        if (parse(file).ext == ".md") {
            dirContentsArr.push(parse(file).name);
        }
    });
    let i = 0;
    dirContentsArr.forEach(async (htmlFileName) => {
        let contentToWrite = await readFile(`${toCompile}/${htmlFileName}.md`);
        let toWrtie = `
${start(title)}
    ${micromark(contentToWrite)}
${end()}
        `;
        console.log(await check(out));
        if (await check(out)) {
            await writeFile(`${out}/${htmlFileName}.html`, toWrtie);
        } else {
            await mkdir(out);
            await writeFile(`${out}/${htmlFileName}.html`, toWrtie);
        }
        console.log(i);
    });
}
