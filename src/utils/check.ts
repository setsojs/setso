import { access } from "fs/promises";

export async function check(dir: any): Promise<boolean> {
    try {
        console.log(dir);
        await access(dir);
        return true;
    } catch (err) {
        return false;
    }
}
