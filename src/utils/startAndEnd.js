export function start(title) {
    return `
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
  </head>
  <body> 
  `;
}

export function end() {
    return `
  </body>
</html>
  `;
}
