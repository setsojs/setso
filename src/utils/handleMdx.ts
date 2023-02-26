import remarkGfm from 'remark-gfm'
import { renderToString } from 'react-dom/server'
import * as runtime from 'react/jsx-runtime'
import { evaluateSync } from '@mdx-js/mdx'
import { createElement } from 'react'

export function handleMdx (body: string): string {
  const mdx = evaluateSync(body, {
    ...runtime as any,
    remarkPlugins: [remarkGfm],
  }).default

  return renderToString(createElement(mdx))
}