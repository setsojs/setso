import { mkdir } from "fs/promises";
import { join, parse } from "path";
import { writeFile } from "fs/promises";
import { dirExists } from "dir-exists-safe";

export async function writeHtml(
    filename: string,
    html: string,
    outDir: string,
    verbose: boolean
) {
    const filenameNoExt = parse(filename).name;
    const toWriteToArray = parse(filename).dir.split("/");
    toWriteToArray[1] = outDir.replace("./", "");
    if (!(await dirExists(join(...toWriteToArray)))) {
        await mkdir(join(...toWriteToArray));
        const toWriteTo =
            "./" + join(...toWriteToArray, filenameNoExt + ".html");
        if (verbose){
                console.log(`Wrting to ${toWriteTo}`)
        }
        await writeFile(toWriteTo, html);
    } else {
        const toWriteTo =
            "./" + join(...toWriteToArray, filenameNoExt + ".html");
        if (verbose){
                console.log(`Wrting to ${toWriteTo}`)
        }
        await writeFile(toWriteTo, html);
    }
}
