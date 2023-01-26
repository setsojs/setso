# src/commands/compile.js

Imports

- writeFile, readdir, mkdir, readFile from 'fs/promises'
- parse from 'path'
- micromark from 'micromark'
- check from '../utils/check'
- start and end from '../utils/startAndEnd.js'
- handleCss from '../utils/handleCss'

```js
function compile(toCompile: any, out: any, title: any, css: any, cssDir: any, verbose: any): Promise<void>
```

Compiles Markdown To Html. Takes:

- toCompile: The directory to compile from
- out: The directory to output to
- title: The title of the compiled html pages
- css: Checks if css is enabled
- cssDir: The directory where the css is taken from
- verbose: If to be verbose or not
