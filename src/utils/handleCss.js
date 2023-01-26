import { readdir, readFile } from "fs/promises";
import { parse } from "path";
let toReturn = `
<style>
</style>
`;

export async function handleCss(cssDir, fileNameNoExt) {
    let cssDirForEach = await readdir(cssDir);
    for (let element in cssDirForEach) {
        if (parse(cssDirForEach[element]).name == fileNameNoExt) {
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
        }
    }
    return toReturn;
}
