import { access } from "fs/promises";

export async function check(dir){
    try {
        await access(dir)
        return true;
    } catch {
        return false;
    }
}