import { readFile } from 'fs/promises'

export async function getCssToInject(inputFile){
    let fileContents = await readFile(inputFile);
    return `
      <style>
        ${fileContents}
      </style>
    `
}