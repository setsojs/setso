# src/utils/getConfig.ts

Imports

- cwd from 'process'

```js
function getConfig(): Promise<any>
```

Imports your `setso.config.js` and returns it if it finds it, else returns nothing.

Returns:

- A config object | Nothing if the file is not found
