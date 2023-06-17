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

/**
 * Takes a md or mdx component and returns the corresponding html
 * 
 * @param body The body to transform to html
 * @returns The html to write
 */
async function createEl(body: string): Promise<string> {
    const mdx = (
        await evaluate(body, {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            ...(runtime as any),
            remarkPlugins: [remarkGfm],
        })
    ).default;
    return renderToString(createElement(mdx));
}

/**
 * Compiles md to html, gets the css, builds it all together and returns it. 
 * 
 * @param file The md file to read and corresponding html file
 * @param cssPath Where the css is located, or undefined if css is not enabled
 * @param verbose Weather to be verbose!
 * @returns The html to write
 * 
 * @async
 */
export async function getHtml(file: string, cssPath: string | undefined, verbose: boolean): Promise<string> {
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
