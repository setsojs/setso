import { title } from "process";
import yamlFront from "yaml-front-matter";

/**
 * Handles the title by extracting it from the front matter of the file
 *
 * For example:
 *
 * ```js
 * import { handleTitle } from './utils/handleTitle.ts'
 *
 * const markdown = handleTitle(// Actual md file)
 * ```
 *
 * @param data - The file read for the front matter
 *
 * @returns string
 */
export function handleTitle(data: string) {
    const read = yamlFront.loadFront(data);
    let titleToReturn = String(read.title)
        .replaceAll("", "")
        .replace("title:", "");
    if (titleToReturn === "undefined") {
        titleToReturn = "Default title";
    }
    return titleToReturn;
}
