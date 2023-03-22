# Contributing

Thanks for taking your time to contribute to setso. Your time and dedication are very appreciated!

Table of contents

-   [Contributing](#contributing)
    -   [Reporting a bug](#reporting-a-bug)
    -   [Contributing code](#contributing-code)
        -   [Setting up an enviorment](#setting-up-an-enviorment)
        -   [Preparing for pushes](#preparing-for-pushes)

## Reporting a bug

To file a bug, please file an issue on the [issues tab on github](https://github.com/micziz/setso/issues)

## Contributing code

### Setting up an enviorment

First, you got to setup setso. First fork and clone the repo

```shell
git clone https://github.com/<your-github-username>/setso.git
```

Then, you need to install the local dependencies. You need to use [pnpm](https://pnpm.io). Install it and then run the following command.

```shell
pnpm install
```

### Preparing for pushes

Before you push, make sure you prepare your code. This can be easly done with

```shell
pnpm prepare
```

This will format and lint the code.

You pr will fail if you have not prepared your code
