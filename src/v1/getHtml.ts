import { readFile } from "fs/promises";
import { evaluate } from '@mdx-js/mdx'
import remarkGfm from "remark-gfm";
import { createElement } from "react";
import { renderToString  } from "react-dom/server";
import * as runtime from 'react/jsx-runtime'

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
    const html = await createEl(read.toString())
    return html    
}