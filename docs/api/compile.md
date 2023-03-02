# src/commands/compile.ts

```ts
function compile(configObj: {
    input: string;
    out: string;
    title: string;
    css: boolean;
    cssDir: string;
    verbose: boolean;
}): Promise<void>;
```

Compiles everything

For example:

```ts
import { compile } from "./utils/check.ts";

await compile({
    // Config obj.
});
```

@param configObj — The configuration object.

@returns — Promise: boolean
