# Set up

Install the tools:

```
npm install --save eslint @denis-sokolov/eslint-plugin
```

Create a minimal `.eslintrc.js` file:

```js
module.exports = {
  plugins: ["@denis-sokolov"],
};
```

Choose a ruleset and add it to the config above:

```js
{
  // For existing big projects that have a lot of warnings
  extends: ["plugin:@denis-sokolov/minimal"],
  // For a good compromise
  extends: ["plugin:@denis-sokolov/recommended"],
  // For new projects
  extends: ["plugin:@denis-sokolov/opinionated"],
}
```

Let eslint know whether you run in Browser or in Node and if you have some [test tools that use globals](https://eslint.org/docs/user-guide/configuring#specifying-environments):

```js
{
  env: {
    browser: true,
    node: true
  }
}
```

If you choose browser-only above, you may need to add `ignorePatterns: ["*.js"]` to the config to not have eslint complain about module.exports use in configuration files.

Add a script to your package.json:

```json
{
  "scripts": {
    "lint": "eslint src"
  }
}
```

Run with `npm run lint` and address the concerns.

If you want to postpone handling a rule for later, or if you disagree with a rule (let us know!), disable in your .eslintrc.js:

```js
module.exports = {
  rules: {
    "react-hooks/exhaustive-deps": "off",
  },
};
```

Finally, once linting shows no errors, add it to your CI run to ensure the expected level going forward.

## Rule options

```js
module.exports = {
  rules: {
    "no-imports-down": [
      "error",
      {
        // Whitelist some paths as allowed
        ignoreRegexes: ["^lib/icons"],
      },
    ],
  },
};
```
