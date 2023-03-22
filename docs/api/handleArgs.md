# src/utils/handleArgs.ts

Handles arguments passed to setso

For example:

```ts
import { handleArgs } from "./utils/handleArgs.ts";
import { arvg } from "process";

const args = handleArgs(argv);
```

@param argsArr — An array to loop over and checkout args

@returns — Map: <string, any>
