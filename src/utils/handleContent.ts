import frontRead from "yaml-front-matter";

/**
 * Extracts the content from the full md document
 *
 * ```ts
 * import { handleContent } from '../utils/handleContent.js'
 *
 * handleContent(// Actual md file.)
 * ```
 *
 * @param content - The content to remove the front matters
 * @returns The content to write.
 */
export function handleContent(content: string) {
    return frontRead.loadFront(content).__content;
}
