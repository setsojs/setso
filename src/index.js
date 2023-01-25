import { getConfig } from "./utils/getConfig.js";
import { compile } from './commands/compile.js'
let config = await getConfig()

let results = await compile(config.default.input)
console.log(results)
