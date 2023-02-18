# src/utils/handleCss.ts

```ts
function handleCss(cssDir: PathLike, fileNameNoExt: string): Promise<string>
```

Returns the css string to inject into the html

For example:

```ts
import { handleCss } from './utils/handleCss.ts'

const cssString = await handleCss('./css', 'main')
```

@param cssDir — The css directory to scan

@param fileNameNoExt — The filename of the html without the extension

@returns — Promise: string
