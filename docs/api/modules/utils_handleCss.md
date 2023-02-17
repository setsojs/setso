[setso](../README.md) / [Modules](../modules.md) / utils/handleCss

# Module: utils/handleCss

## Table of contents

### Functions

- [handleCss](utils_handleCss.md#handlecss)

## Functions

### handleCss

▸ **handleCss**(`cssDir`, `fileNameNoExt`): `Promise`<`string`\>

Returns the css string to inject into the html

For example:

```js
import { handleCss } from './utils/handleCss.ts'

const cssString = await handleCss('./css', 'main')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cssDir` | `PathLike` | The css directory to scan |
| `fileNameNoExt` | `string` | The filename of the html without the extension |

#### Returns

`Promise`<`string`\>

Promise: string

#### Defined in

[utils/handleCss.ts:37](https://github.com/setsojs/setso/blob/df92c94/src/utils/handleCss.ts#L37)
