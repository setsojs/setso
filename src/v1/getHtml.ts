import { readFile } from "fs/promises";
import { evaluate } from '@mdx-js/mdx'
import remarkGfm from "remark-gfm";
import { createElement } from "react";
import { renderToString  } from "react-dom/server";
import * as runtime from 'react/jsx-runtime'
import matter from "gray-matter";
import { getTemplate } from "./getTemplate.js";

async function createEl(body: string) {
    const mdx = (await evaluate(body, {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ...(runtime as any),
        remarkPlugins: [remarkGfm],
    })).default;
    return renderToString(createElement(mdx));
}

export async function getHtml(file: string){
    const read = await readFile(file)
    const body = matter(read.toString()).content
    const title = (typeof matter(read.toString()).data.title !== "undefined") ? matter(read.toString()).data.title : 'Setso default title'
    const html = getTemplate(await createEl(body), title)
    return html  
}