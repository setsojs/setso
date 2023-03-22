/**
 * Handles arguments passed in to setso
 *
 * For example:
 *
 * ```js
 * import { handleArgs } from './utils/handleArgs.ts'
 * import { arvg } from 'process'
 *
 * const args = handleArgs(argv)
 * ```
 *
 * @param argsArr - An array to loop over and checkout args
 *
 * @returns Map: <string, any>
 */
export function handleArgs(argsArr: string[]): Map<string, any> {
    const args = new Map();
    argsArr.forEach((el) => {
        if (el == "--input") {
            const index = argsArr.indexOf(el);
            args.set("input", argsArr[index + 1]);
        } else if (el == "--out") {
            const index = argsArr.indexOf(el);
            args.set("out", argsArr[index + 1]);
        } else if (el == "--css") {
            args.set("css", true);
        } else if (el == "--cssDir") {
            const index = argsArr.indexOf(el);
            args.set("cssDir", argsArr[index + 1]);
        } else if (el == "--verbose") {
            args.set("verbose", true);
        }
    });
    return args;
}
