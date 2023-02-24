# src/utils/check.ts

```ts
function check(dir: string): Promise<boolean>
```

Checks if a directory exists

For example:

```ts
import { check } from './utils/check.ts'


if (check('./dirToCheck')){
    // Do stuff
}
```

@param dir — The directory to check.

@returns — Promise: boolean
