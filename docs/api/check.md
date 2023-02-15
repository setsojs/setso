# src/utils/check.js

Imports:

- fse from 'fs-extra'

```js
function check(dir: string): Promise<boolean>
```

Checks if a directory exist. Takes:

- dir: Directory to check
  
Returns

- Ture if exists, false if not.
