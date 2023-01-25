# Setso

> Psst, setso is still in developement. While you can use it, it's still really hard to setup. Expect bugs and missing features.

Setso, a library to automatically convert your markdown to html in an orderd fashion.

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

## What do i do now?

Setso is not concerned on how you ship your html, its only concern is to bring your markdown into html.

We suggest [vite](https://vitejs.dev) for viewing and shipping your html.

## Configuration

To configure setso, the only thing you need is a `setso.config.js`. Here are the available options

- `input`: Directory that setso gets your markdown. Defaults to content
- `out`: Directory that setso puts your complied html to. Defaults to html
- `title`: Title of the compiled html pages. Defaults to setso defalut title.

Example config:

```js
export default{
    input: "test",
    out: "anotherTest",
    title: "whatever you want!"
}
```

## Contributing

Check out [contributing.md](contributing.md) for more info.

## License

Licensed Under The "MIT License"
