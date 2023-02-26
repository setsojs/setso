import { parse } from "path";

export function handleTitle(titleGiven: any, htmlFileName: string) {
    if (typeof titleGiven == "object") {
        if (parse(htmlFileName).name in titleGiven) {
            return titleGiven[parse(htmlFileName).name];
        } else {
            return "Setso default title";
        }
    } else {
        return titleGiven;
    }
}
