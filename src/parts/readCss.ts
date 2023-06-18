// Imports

// Node Imports
import { readFile } from "fs/promises";
import { join, parse } from "path";

// External Imports
import { fileExists } from "file-exists-safe";

/**
 * Gets the css corresponding to a filename and returns the css associated with it.
 *
 * @param fileName The filename to try to read the css from
 * @param cssPath The directory where the css is located
 * @returns The style element to insert into the template
 *
 * @async
 */
export async function readCss(
    fileName: string,
    cssPath: string
): Promise<string> {
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
