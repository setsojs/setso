[setso](../README.md) / [Modules](../modules.md) / utils/readInitialDir

# Module: utils/readInitialDir

## Table of contents

### Functions

- [readInitalDir](utils_readInitialDir.md#readinitaldir)

## Functions

### readInitalDir

▸ **readInitalDir**(`dirToRead`): `Promise`<`string`[]\>

Returns an array with the filenames of the markdown directory

For example:

```js
import { readInitialDir } from './utils/readInitialDir.ts'

const initialDir = await readInitialDir('./directory')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dirToRead` | `PathLike` | The directory to read |

#### Returns

`Promise`<`string`[]\>

Promise: string[]

#### Defined in

[utils/readInitialDir.ts:20](https://github.com/setsojs/setso/blob/df92c94/src/utils/readInitialDir.ts#L20)
