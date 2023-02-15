export function start(title: string): string {
    return `
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="bundle.css">
    <title>${title}</title>
  </head>
  <body> 
  `;
}

export function end(): string {
    return `
  </body>
</html>
  `;
}
