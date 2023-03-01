# Configurating Setso

To configure setso, the only thing you need is a `setso.config.js`. The available options can be found [here](docs/api/setso.config.js.md)

Here is an example config:

```js
export default{
    input: "/test", // Where setso finds your html
    out: "/anotherTest", // Where setso puts your result
    title: "whatever you want!", // The title of the webpages
    css: true, // Whether css is present
    cssDir: "/testCss" // Where setso finds your css
}
```

> Note: The format for paths is `/pathname`