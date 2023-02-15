import { readdir, readFile } from "fs/promises";
import { parse } from "path";
import type { PathLike } from "fs";
const toReturn = `
<style>
</style>
`;
let sass;

export async function handleCss(cssDir: PathLike, fileNameNoExt: string) {
    const cssDirForEach = await readdir(cssDir);
    for (const element in cssDirForEach) {
        if (
            parse(cssDirForEach[element]).name == fileNameNoExt &&
            cssDirForEach[element].endsWith(".css")
        ) {
            const toWrite = await readFile(
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
            const result = await sass.default.compileAsync(
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
