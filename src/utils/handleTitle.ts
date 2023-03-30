import { title } from 'process'
import yamlFront from 'yaml-front-matter'

/**
 * Handles the title to include in markup
 *
 * For example:
 *
 * ```js
 * import { handleTitle } from './utils/handleTitle.ts'
 *
 * const markdown = handleTitle('title', 'hello')
 * ```
 *
 * @param data - The file read for the front matter
 *
 * @returns string
 */
export function handleTitle(data: string){
    const read = yamlFront.loadFront(data)
    let titleToReturn = String(read.title).replaceAll("", "").replace("title:", "")
    if (titleToReturn === "undefined"){
        titleToReturn = "Default title"
    }
    return titleToReturn
}
