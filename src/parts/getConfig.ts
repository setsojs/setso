import json5 from "json5";
import { readFile } from "fs/promises";
import { fileExists } from "file-exists-safe";
import { optionsSchema } from "./compile.js";
import { z } from "zod";

async function getFile() {
    if (await fileExists("./setso.config.json")) {
        return "./setso.config.json";
    } else if (await fileExists("./setso.config.json5")) {
        return "./setso.config.json5";
    } else {
        return undefined;
    }
}

export async function getConfigFromFiles(): Promise<
    z.infer<typeof optionsSchema> | undefined
> {
    const configFile = await getFile();
    if (configFile === undefined) {
        return undefined;
    }
    const config: z.infer<typeof optionsSchema> = await json5.parse(
        (await readFile(configFile)).toString()
    );
    return config;
}
