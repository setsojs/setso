import fse from "fs-extra";

export async function check(dir: string): Promise<boolean> {
    try {
        await fse.ensureDir(dir);
        return true;
    } catch (err) {
        return false;
    }
}
