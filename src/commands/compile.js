import { writeFile, readdir, mkdir } from "fs/promises"
import { cwd } from "process"
import { parse } from "path"
import { handleFile } from "../utils/handleFiles.js";
import { getConfig } from "../utils/getConfig.js";
import { check } from '../utils/check.js'

let config = await getConfig()

export async function compile(input){
    let content;
    let dirContents;
    try {
        let contentDir = await readdir(input)
        contentDir.forEach(async (file) => {
            let resultToWrite;
            if (!config.default.input in config){
                resultToWrite = await handleFile(`${cwd()}/dist/${file}`)
            } else {
                resultToWrite = await handleFile(`${cwd()}/${config.default.input}/${file}`)
            }
            if (config.default.out !== undefined){
                if (await check(config.default.out)){
                    
                    await writeFile(`${cwd()}${config.default.out}/${parse(file).name}.html`, resultToWrite)
                } else {
                    await mkdir(`${cwd()}/${config.default.out}`, { recursive: true })
                    await writeFile(`${cwd()}${config.default.out}/${parse(file).name}.html`, resultToWrite)
                }
            } else {
                if (await check('html')){
                    await writeFile(`${cwd()}/html/${parse(file).name}.html`, resultToWrite)
                } else {
                    await mkdir(`${cwd()}/html`, { recursive: true })
                    await writeFile(`${cwd()}/html/${parse(file).name}.html`, resultToWrite)
                }
            }
        })
    } catch {
        throw `${input} is either not a directory or non existant!` 
    }
}