import remarkGfm from "remark-gfm";
import { renderToString } from "react-dom/server";
import * as runtime from "react/jsx-runtime";
import { evaluateSync } from "@mdx-js/mdx";
import { createElement } from "react";

/**
 * Handles and compiles the markdown
 *
 * For example:
 *
 * ```js
 * import { handleMd } from './utils/handleMd.ts'
 *
 * const markdown = handleMd('# Hi!')
 * ```
 *
 * @param body - The body to compile
 *
 *
 * @returns string
 */
export function handleMd(body: string): string {
    const mdx = evaluateSync(body, {
        ...(runtime as any),
        remarkPlugins: [remarkGfm],
    }).default;

    return renderToString(createElement(mdx));
}
