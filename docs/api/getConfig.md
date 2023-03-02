# src/utils/getConfig.ts

```ts
function getConfig(): Promise<Config | undefined>;
```

Returns the config in setso.config.js

For example:

```ts
import { getConfig } from "./utils/getConfig.ts";

const config = await getConfig();
```

@returns — Promise: Config | undefined
