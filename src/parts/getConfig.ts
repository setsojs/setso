// Imports

// Local Imports
import { optionsSchema } from "./compile.js";

// Node Imports
import { readFile } from "fs/promises";

// External imports
import json5 from "json5";
import { fileExists } from "file-exists-safe";
import { z } from "zod";

/**
 * Finds the config file to read, or else returns undefined.
 * 
 * @returns Either setso.config.json, setso.config.json5 or undefined if there is no file 
 */
async function getFile(): Promise<"./setso.config.json" | "./setso.config.json5" | undefined> {
    if (await fileExists("./setso.config.json")) {
        return "./setso.config.json";
    } else if (await fileExists("./setso.config.json5")) {
        return "./setso.config.json5";
    } else {
        return undefined;
    }
}

/**
 * Reads the config file and returns the options
 * @returns The option schema to have everything typed or undefined if it does not find it.
 */
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
