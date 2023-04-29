import { getHtml } from "./getHtml.js";
import { readInitialDir } from "./readDir.js";
import { z } from 'zod'
import { writeHtml } from "./writeHtml.js";

const optionsSchema = z.object({
    dir: z.string(),
    outDir: z.string()
})

export async function compile(opts: z.infer<typeof optionsSchema>){

    const filesToCompile = await readInitialDir(opts.dir)
    for await (const file of filesToCompile){
        console.log(file)
        const html = await getHtml(file);
        await writeHtml(file, html, opts.outDir)
    }
}

await compile({dir: process.argv[2], outDir: process.argv[3]})