# createEl

Located in src/parts/getHtml.ts

```ts
async function createEl(body: string): Promise<string>;
```

Compiles mdx to normal markdown, even if mdx is not used.

For example:

```ts
import { createEl } from "./parts/getHtml.ts";

await getHtml(/*body*/);
```

Parameters:

body: The body to compile

Returns:

A promise with the compiled markdown
