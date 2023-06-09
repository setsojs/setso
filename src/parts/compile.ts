// Imports
// Local Imports

import { getHtml } from "./getHtml.js";
import { readInitialDir } from "./readDir.js";
import { writeHtml } from "./writeHtml.js";

// External Imports

import { z } from "zod";

// Declare Zod Schema for options
export const optionsSchema = z.object({
    dir: z.string(),
    outDir: z.string(),
    css: z.boolean(),
    cssDir: z.string().optional(),
    verbose: z.boolean()
});

/**
 * Function to compile a directory from Markdown and MDX to markdown.
 * 
 * @param opts Options to pass to functions. Is Inferred from option Schema!
 * @async
 * @returns Nothing
 */
export async function compile(opts: z.infer<typeof optionsSchema>): Promise<void> {
    const filesToCompile = await readInitialDir(opts.dir, opts.verbose);
    for await (const file of filesToCompile) {
        const html = await getHtml(file, opts.cssDir, opts.verbose);
        await writeHtml(file, html, opts.outDir, opts.verbose);
    }
}
