[setso](../README.md) / [Modules](../modules.md) / commands/compile

# Module: commands/compile

## Table of contents

### Functions

- [compile](commands_compile.md#compile)

## Functions

### compile

▸ **compile**(`configObj`): `Promise`<`void`\>

Compiles everything

For example:

```js
import { compile } from './utils/check.ts'

await compile({
 // Config obj.
})

```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configObj` | `Object` | The configuration object. |
| `configObj.css` | `boolean` | - |
| `configObj.cssDir` | `string` | - |
| `configObj.input` | `string` | - |
| `configObj.out` | `string` | - |
| `configObj.title` | `string` | - |
| `configObj.verbose` | `boolean` | - |

#### Returns

`Promise`<`void`\>

Promise: boolean

#### Defined in

[commands/compile.ts:44](https://github.com/setsojs/setso/blob/df92c94/src/commands/compile.ts#L44)
