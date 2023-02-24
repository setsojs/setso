# Setso

Setso, a library to automatically convert your markdown to html in an ordered fashion.

## Why use setso

- Has sensible defaults, yet is customizable
- Ships zero js to the browser by default
- Is not concerned with the way you serve/deploy your files
- Auto injects css in your html, with automatic support for compiling scss

## Quick start

If you want something quickly setup with our personal recommendations, you can use the [setso default template](https://github.com/setsojs/setso-starter)

It comes equipped with Vite as the build tool for a blazingly fast experience.

If you prefer to setup things manually:

## Installation

```shell
npm install --save-dev setso

# In Alternative you can use yarn or pnpm
yarn add -D setso
pnpm add -D setso
```

## Usage

First, initialize a package.json

```shell
npm init -y
```

Then add a script in the package.json

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

## Adding css

Setso supports css files and will inject them automatically into the corresponding file (based on the name)

To add css:

1. Create a `css` directory
2. Add some css files in the `css` directory. Make sure they are the same name as the markdown file you want to target, or they will be ignored by setso
3. Set the `css` option to true

If you want to have a custom css directory, add the `cssDir` option to the path of your css directory.

If you prefer to use scss, just change your extension from `.css` to `.scss`. Setso will handle the rest.

[More info here](docs/api/setso.config.js.md)

## What do i do now?

Setso is not concerned on how you ship your html, its only concern is to bring your markdown into html.

If you are not using the default starter, then it's a choose your own adventure story:

- You can use vite
- You can build a server app with express

## Configuration

To configure setso, the only thing you need is a `setso.config.js`. The available options can be found [here](docs/api/setso.config.js.md)

Example config:

```js
export default{
    input: "test",
    out: "anotherTest",
    title: "whatever you want!",
    css: true,
    cssDir: "testCss"
}
```

> Note: The format for paths is `/pathname`

## Contributing

Check out [contributing.md](docs/contributing.md) for more info.

## License

Licensed Under The "MIT License". More info in the [LICENSE file](LICENSE)
