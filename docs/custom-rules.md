# Custom (project-specific) rules

Create linting rules that are customized to your project. Example use cases:

- Reminding teammates to not use deprecated APIs;
- Ensuring consistency for tools that can be used in various ways;
- Ensure arbitrary team preferences like a length of file.

With this plugin in place, the setup to write a custom rule is really simple. In your `.eslintrc.js`:

```js
const { custom } = require("@theorem/eslint-plugin/dist/custom");

module.exports = {
  extends: [
    // ...
    custom(__dirname + "/src/my-lint-rules"),
  ],
  plugins: ["@theorem"],
};
```

In `src/my-lint-rules/`, then, put a file `my-rule.js`:

```js
module.exports = {
  create: function (context) {
    return {
      TSUnionType(node) {
        context.report({
          message: ["We hate type unions"].join(" "),
          node,
        });
      },
    };
  },
};
```

Writing a rule itself requires a bit more familiarity, see [our tips on creating rules](./creating-rules.md).

Alternative tools: [1](https://github.com/not-an-aardvark/eslint-plugin-rulesdir), [2](https://www.npmjs.com/package/eslint-plugin-local).
