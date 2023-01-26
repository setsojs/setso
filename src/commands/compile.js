import { writeFile, readdir, mkdir, readFile } from "fs/promises";
import { parse } from "path";
import { micromark } from "micromark";
import { check } from "../utils/check.js";
import { start, end } from "../utils/startAndEnd.js";
import { handleCss } from "../utils/handleCss.js";

let cssString = `
    <style></style>
`;

export async function compile(toCompile, out, title, css, cssDir, verbose) {
    let dirContentsArr = [];
    if (verbose) {
        console.log(`Reading ${toCompile}`);
    }
    let toComplieDirRead = await readdir(toCompile);
    toComplieDirRead.forEach((file) => {
        if (parse(file).ext == ".md") {
            dirContentsArr.push(parse(file).name);
        }
    });
    dirContentsArr.forEach(async (htmlFileName) => {
        if (verbose) {
            console.log(`Compiling ${htmlFileName}.md`);
        }
        let contentToWrite = await readFile(`${toCompile}/${htmlFileName}.md`);
        if (css === true) {
            if (verbose) {
                console.log(`Getting css from ${cssDir}`);
            }
            cssString = await handleCss(cssDir, parse(htmlFileName).name);
        }
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
    });
}
