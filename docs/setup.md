# Set up

Install the tools:

```
npm install --save eslint @theorem/eslint-plugin
```

Create a minimal `.eslintrc.js` file:

```js
module.exports = {
  plugins: ["@theorem"]
};
```

Choose a ruleset and add it to the config above:

```js
{
  // For existing big projects that have a lot of warnings
  extends: ["plugin:@theorem/minimal"],
  // For a good compromise
  extends: ["plugin:@theorem/recommended"],
  // For new projects
  extends: ["plugin:@theorem/opinionated"],
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
    "lint": "eslint --ext js,jsx,ts,tsx src"
  }
}
```

Run with `npm run lint` and address the concerns.

If you want to postpone handling a rule for later, or if you disagree with a rule (let us know!), disable in your .eslintrc.js:

```js
module.exports = {
  rules: {
    "react-hooks/exhaustive-deps": "off"
  }
};
```

Finally, once linting shows no errors, add it to your CI run to ensure the expected level going forward.
