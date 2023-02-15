# src/utils/getConfig.js

Imports

- cwd from 'process'

```js
function getConfig(): Promise<unknown>
```

Imports your `setso.config.js` and returns it if it finds it, else returns nothing.
