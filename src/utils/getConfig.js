import { cwd } from "process";

export async function getConfig() {
    try {
        let config = await import(`${cwd()}/setso.config.js`);
        return config;
    } catch (err) {
        console.log("No config found");
    }
}
