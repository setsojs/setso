# src/utils/handleCss.js

Imports:

- readdir, readFile from 'fs/promises'
- parse from 'path'
- sass from 'sass'

```js
function handleCss(cssDir: any, fileNameNoExt: any): Promise<string>
```

Handles and injects css and scss Files.

Takes:

- cssDir: Directory where the css is located
- fileNameNoExt: The html filename without the extension
