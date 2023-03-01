# Quick start

## Fast setup

If you want something quickly setup with our personal recommendations, you can use the [setso default template](https://github.com/setsojs/setso-starter)

It comes equipped with Vite as the build tool for a blazingly fast experience.

If you prefer to setup things manually:

### Manual setup

First, initialize a package.json

```shell
npm init -y

# In Alternative yarn and pnpm are supported
yarn init
pnpm init
```

Then install setso

```shell
npm install --save-dev setso

# In Alternative you can use yarn or pnpm
yarn add -D setso
pnpm add -D setso
```

Then add a script in your package.json

```json
 "scripts": {
    "build": "setso"
 }
```

Then create a `content` and write some markdown in it.

Then just run

```shell
npm run build
```

And you should now see an `html` directory with your html in it!