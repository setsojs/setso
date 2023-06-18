/**
 * Returns the full template to write to the final html file.
 *
 * @param body The body of the page
 * @param title The title of the html page
 * @param css The css to inject
 * @returns The full template
 */
export function getTemplate(body: string, title: string, css: string): string {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    ${css}
    ${body}
</body>
</html>
`;
}
