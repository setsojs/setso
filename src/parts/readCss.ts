// Imports

// Node Imports
import { readFile } from "fs/promises";
import { join, parse } from "path";

// External Imports
import { fileExists } from "file-exists-safe";

export async function readCss(fileName: string, cssPath: string) {
    fileName = fileName.replace(parse(fileName).ext, "");
    const pathToCheckCss = await fileExists(fileName + ".css");
    const pathToCheckScss = await fileExists(fileName + ".scss");
    let cssToReturn = "";
    // if *.css exits or *.scss exits
    if (await fileExists(join(cssPath, fileName + "*.css"))) {
        cssToReturn =
            cssToReturn +
            `
    <style>
${(await readFile(join(cssPath, "*.css"))).toString()}
    </style>`;
    } else if (await fileExists(join(cssPath, fileName + "*.scss"))) {
        cssToReturn =
            cssToReturn +
            `
    <style>
${(await readFile(join(cssPath, "*.scss"))).toString()}
    </style>`;
    }
    if (pathToCheckCss) {
        cssToReturn =
            cssToReturn +
            `
    <style>
${(await readFile(fileName + ".css")).toString()}
    </style>`;
    } else if (pathToCheckScss) {
        cssToReturn =
            cssToReturn +
            `
    <style>
${(await readFile(fileName + ".scss")).toString()}
    </style>`;
    } else {
        cssToReturn = cssToReturn + "<style></style>";
    }
    return cssToReturn;
}
