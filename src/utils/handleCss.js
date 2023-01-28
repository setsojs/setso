import { readdir, readFile } from "fs/promises";
import { parse } from "path";
let toReturn = `
<style>
</style>
`;
let sass;

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
            try {
                sass = await import("sass");
            } catch (err) {
                throw "Due to a bug with sass, you will have to install it usign npm install -D sass";
            }
            let result = await sass.default.compileAsync(
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
