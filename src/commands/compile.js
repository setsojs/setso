import { writeFile, readdir, mkdir, readFile } from "fs/promises";
import { parse } from "path";
import { micromark } from "micromark";
import { check } from "../utils/check.js";
import { start, end } from "../utils/startAndEnd.js";
import { handleCss } from "../utils/handleCss.js";

let cssString = `
    <style></style>
`;

export async function compile(toCompile, out, title, css, cssDir) {
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
        console.log(css);
        if (css === true) {
            cssString = await handleCss(cssDir, parse(htmlFileName).name);
        }
        console.log(cssString);
        let toWrtie = `
${start(title)}
${cssString}
    ${micromark(contentToWrite)}
${end()}
        `;
        if (await check(out)) {
            await writeFile(`${out}/${htmlFileName}.html`, toWrtie);
        } else {
            await mkdir(out);
            await writeFile(`${out}/${htmlFileName}.html`, toWrtie);
        }
        console.log(i);
    });
}
