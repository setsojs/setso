# setso.config.js

Configure your setso eviorment using this file.

## Guide

1. Create a `setso.config.js`
2. Export a default object

```js
export default {
  input: '/test', // The directory where your markdown is located (if file is present, is required)
  out: '/outTest', // The directory where setso will output your html
  css: true, // Wether css is present
  cssDir: '/cssTest', // Your directory where your css is located (will have no effect if css is false|undefined)
  title: {
    'hello': 'What'
  }, // The title of your webpages. Can be a string (a single title for every page) or an object (a different title for every different page)
  verbose: true // Wether to be verbose or not
}
```
