import fse from "fs-extra";

export async function check(dir: string) {
    try {
        await fse.ensureDir(dir);
        return true;
    } catch (err) {
        return false;
    }
}