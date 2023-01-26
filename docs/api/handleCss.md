# src/utils/handleCss.js

Imports:

- readdir, readFile from 'fs/promises'
- parse from 'path'


```js
function handleCss(cssDir: any, fileNameNoExt: any): Promise<string>
```

Handles and injects css Files.

Takes:

- cssDir: Directory where the css is located
- fileNameNoExt: The html filename without the extension.