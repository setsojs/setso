import { getConfig } from "./utils/getConfig.js";
import { compile } from './commands/compile.js'
import { cwd } from 'process'
let config = await getConfig()

let input = `${cwd()}/content`;
let out = `${cwd()}/html`; 

if (config.default.input !== undefined){
  input = `${cwd()}${config.default.input}`
} 

if (config.default.out !== undefined){
  out = `${cwd()}${config.default.out}`
} 

await compile(input, out)