# src/utils/handleCss.ts

Imports:

- readdir, readFile from 'fs/promises'
- parse from 'path'
- `type` PathLike from 'fs';
- sass from 'sass' (lazy loaded due to to a bug)

```js
function handleCss(cssDir: PathLike, fileNameNoExt: string): Promise<string>
```

Handles and injects css and scss Files.

Takes:

- cssDir: Directory where the css is located
- fileNameNoExt: The html filename without the extension

Returns:

- The css to inject
