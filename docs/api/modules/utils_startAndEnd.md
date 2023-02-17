[setso](../README.md) / [Modules](../modules.md) / utils/startAndEnd

# Module: utils/startAndEnd

## Table of contents

### Functions

- [end](utils_startAndEnd.md#end)
- [start](utils_startAndEnd.md#start)

## Functions

### end

▸ **end**(): `string`

Returns the markup down from the second body

For example:

```js
import { end } from './utils/startAndEnd.ts'

const start = end()
```

#### Returns

`string`

string

#### Defined in

[utils/startAndEnd.ts:48](https://github.com/setsojs/setso/blob/df92c94/src/utils/startAndEnd.ts#L48)

___

### start

▸ **start**(`title`): `string`

Returns the initial markup up untill the first body tag

For example:

```
import { start } from './utils/startAndEnd.ts'

const start = start('title')
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `title` | `string` | The title to put in the title tag. |

#### Returns

`string`

string

#### Defined in

[utils/startAndEnd.ts:17](https://github.com/setsojs/setso/blob/df92c94/src/utils/startAndEnd.ts#L17)
