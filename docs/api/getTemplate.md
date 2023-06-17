# getTemplate

Located in src/parts/getTemplate.ts

```ts
async function getTemplate(body: string, title: string, css: string): string;
```

Returns the full template to write to the final html file.

For example:

```ts
import { getTemplate } from "./parts/getTemplate.ts";

getTemplate(/*body*/, /*title*/, /*css*/)
```

Parameters:

body: The compiled body
title: The title of that page
css: The css to inject

Returns:

The full template.
