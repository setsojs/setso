# src/commands/compile.js

Imports

- writeFile, readdir, mkdir, readFile from 'fs/promises'
- parse from 'path'
- micromark from 'micromark'
- check from '../utils/check'
- start and end from '../utils/startAndEnd.js'
- handleCss from '../utils/handleCss'

```js
function compile(configObj: {
    input: string;
    out: string;
    title: string;
    css: boolean;
    cssDir: string;
    verbose: boolean;
}): Promise<void>
```

Compiles Markdown To Html. Takes an object with properties:

- input: The directory to compile from
- out: The directory to output to
- title: The title of the compiled html pages
- css: Checks if css is enabled
- cssDir: The directory where the css is taken from
- verbose: If to be verbose or not
