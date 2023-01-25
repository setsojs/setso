import { cwd } from 'process'

export async function getConfig() {
    let config = await import(`${cwd()}/setso.config.js`)
    return config;
}