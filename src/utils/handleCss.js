import { readdir, readFile } from "fs/promises";
import { parse } from "path";
import sass from "sass";
let toReturn = `
<style>
</style>
`;

export async function handleCss(cssDir, fileNameNoExt) {
    let cssDirForEach = await readdir(cssDir);
    for (let element in cssDirForEach) {
        if (
            parse(cssDirForEach[element]).name == fileNameNoExt &&
            cssDirForEach[element].endsWith(".css")
        ) {
            let toWrite = await readFile(
                `${cssDir}/${cssDirForEach[element]}`,
                {
                    encoding: "utf8",
                }
            );
            return `
    <style>
      ${toWrite}
    </style>
          `;
        } else if (
            parse(cssDirForEach[element]).name == fileNameNoExt &&
            cssDirForEach[element].endsWith(".scss")
        ) {
            let result = await sass.compileAsync(
                `${cssDir}/${cssDirForEach[element]}`
            );
            return `
    <style>
      ${result.css}
    </style>
          `;
        }
    }
    return toReturn;
}
