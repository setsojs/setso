import { parse } from "path";

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
 * @param titleGiven - Title to put in markup
 * @param htmlFileName - Filename for searching in an object
 *
 * @returns string
 */
export function handleTitle(titleGiven: string, htmlFileName: string): string {
    if (typeof titleGiven == "object") {
        if (parse(htmlFileName).name in titleGiven) {
            return titleGiven[parse(htmlFileName).name];
        } else {
            return "Setso default title";
        }
    } else {
        return titleGiven;
    }
}
