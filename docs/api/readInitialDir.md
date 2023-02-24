# src/utils/readInitialDir.ts

```ts
function readInitalDir(dirToRead: PathLike): Promise<string[]>
```

Returns an array with the filenames of the markdown directory

For example:

```ts
import { readInitialDir } from './utils/readInitialDir.ts'

const initialDir = await readInitialDir('./directory')
```

@param dirToRead — The directory to read

@returns — Promise: string[]
