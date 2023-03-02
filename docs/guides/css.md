## Adding css

Setso supports css and will scope and inject them automatically into the corresponding file (based on the name)

To add css to your markup:

1. Create a `css` directory (if you want to change it see cssDir).
2. Add some css files in the `css` directory. Make sure they are the same name as the markdown file you want to target, or they will be ignored by setso
3. Set the `css` option to true

If you want to have a custom css directory, add the `cssDir` with the path of your css directory.

If you prefer to use scss, just change your extension from `.css` to `.scss`. Setso will handle the rest.
