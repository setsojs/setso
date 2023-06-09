import { getHtml } from "./getHtml.js";
import { readInitialDir } from "./readDir.js";
import { z } from "zod";
import { writeHtml } from "./writeHtml.js";

export const optionsSchema = z.object({
    dir: z.string(),
    outDir: z.string(),
    css: z.boolean(),
    cssDir: z.string().optional(),
});

export async function compile(opts: z.infer<typeof optionsSchema>) {
    const filesToCompile = await readInitialDir(opts.dir);
    for await (const file of filesToCompile) {
        const html = await getHtml(file, opts.cssDir);
        await writeHtml(file, html, opts.outDir);
    }
}
