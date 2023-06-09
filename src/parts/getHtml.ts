// Imports

// Local Imports 
import { getTemplate } from "./getTemplate.js";
import { readCss } from "./readCss.js";

// Node imports
import { readFile } from "fs/promises";

// External Imports
import { createElement } from "react";
import { renderToString } from "react-dom/server";
import * as runtime from "react/jsx-runtime";
import { evaluate } from "@mdx-js/mdx";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";

async function createEl(body: string) {
    const mdx = (
        await evaluate(body, {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...(runtime as any),
            remarkPlugins: [remarkGfm],
        })
    ).default;
    return renderToString(createElement(mdx));
}

export async function getHtml(file: string, cssPath: string | undefined, verbose: boolean) {
    if (verbose){
        console.log("Reading Html")
    }
    const read = await readFile(file);
    const body = matter(read.toString()).content;
    if (verbose){
        console.log("Getting Title...")
    }
    const title =
        typeof matter(read.toString()).data.title !== "undefined"
            ? matter(read.toString()).data.title
            : "Setso default title";            
    let css = "<style></style>";
    if (cssPath !== undefined) {
        if (verbose){
            console.log("Getting Css...")
        }
        const spliting = file.split("/");
        spliting[1] = cssPath.replace("./", "");
        css = await readCss(spliting.join("/"), cssPath);
    }
    if (verbose){
        console.log("Building Template...")
    }
    const html = getTemplate(await createEl(body), title, css);
    return html;
}
