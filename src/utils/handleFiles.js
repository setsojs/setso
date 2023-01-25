import { readFile } from "fs/promises"
import { micromark } from "micromark"

export async function handleFile(file){
    try {
        let content = await readFile(file, {
            encoding: 'ascii'
        })
        return micromark(content)
    } catch (err){
        throw `${file} is either not a file or non existant!`
    }
}