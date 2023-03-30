import frontRead from "yaml-front-matter";

export function handleContent(content: string) {
    return frontRead.loadFront(content).__content;
}
