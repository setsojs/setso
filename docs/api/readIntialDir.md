# src/utils/readIntitalDir.ts

Imports:

- readdir from 'fs/promises'
- parse from 'path'
- `type` PathLike from 'fs';

```js
function readInitalDir(dirToRead: PathLike): Promise<string[]>
```

Reads the directory and returns an array with the files

Takes:

- dirToRead: The directory to read

Returns:

- An array of files of the read directory
