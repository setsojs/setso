# src/utils/handleCss.js

Imports:

- readdir, readFile from 'fs/promises'
- parse from 'path'
- `type` PathLike from 'fs';
- sass from 'sass' (lazy loaded due to to a pug)

```js
function handleCss(cssDir: PathLike, fileNameNoExt: string): Promise<string>
```

Handles and injects css and scss Files.

Takes:

- cssDir: Directory where the css is located
- fileNameNoExt: The html filename without the extension
