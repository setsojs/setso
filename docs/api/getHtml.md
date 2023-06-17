# getHtml

Located in src/parts/getHtml.ts

```ts
async function getHtml(
    file: string,
    cssPath: string | undefined,
    verbose: boolean
): Promise<string>;
```

Reads a markdown file and compiles it to html.

For example:

```ts
import { getHtml } from "./parts/getHtml.ts";

await getHtml(/*file*/, /*Css path, can be undefined */, /*verbose*/)
```

Parameters:

file: The file to compile
cssPath: The path to the corresponding css, if css is enebaled
verbose: Whether to be verbose or not.

Returns:

A promise with the compiled html
