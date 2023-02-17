// Exported function that takes a string and returns a string
/**
 * Returns the initial markup up untill the first body tag
 *
 * For example:
 *
 * ```
 * import { start } from './utils/startAndEnd.ts'
 *
 * const start = start('title')
 * ```
 *
 * @param title - The title to put in the title tag.
 *
 * @returns string
 */
export function start(title: string): string {
    // Return the markup up until the body
    return `
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="bundle.css">
    <title>${title}</title>
  </head>
  <body> 
  `;
}

// Exported function that returns a string
/**
 * Returns the markup down from the second body
 *
 * For example:
 *
 * ```js
 * import { end } from './utils/startAndEnd.ts'
 *
 * const start = end()
 * ```
 *
 * @param title - The title to put in the title tag.
 *
 * @returns string
 */
export function end(): string {
    // Return the markup from the closing body tag down.
    return `
  </body>
</html>
  `;
}
