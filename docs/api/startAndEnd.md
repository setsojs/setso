# src/utils/startAndEnd.ts

```ts
function start(title: string): string
```

Returns the initial markup up untill the first body tag

For example:

```ts
import { start } from './utils/startAndEnd.ts'

const start = start('title')
```

@param title — The title to put in the title tag.

@returns — string

```ts
function end(): string
```

Returns the markup down from the second body

For example:

```ts
import { end } from './utils/startAndEnd.ts'

const start = end()
```

@returns — string
