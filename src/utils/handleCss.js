import { readdir, readFile } from "fs/promises";
import { parse } from "path";
let toReturn = `
<style>
</style>
`;

export async function handleCss(cssDir, fileNameNoExt) {
    let cssDirForEach = await readdir(cssDir);
    for (let element in cssDirForEach) {
        console.log(element);
        if (parse(cssDirForEach[element]).name == fileNameNoExt) {
            console.log("hi");
            let toWrite = await readFile(
                `${cssDir}/${cssDirForEach[element]}`,
                {
                    encoding: "utf8",
                }
            );
            console.log(toWrite);
            return `
    <style>
      ${toWrite}
    </style>
          `;
        }
    }
    return toReturn;
}
