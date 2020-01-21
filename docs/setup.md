# Set up

Install the tools:

```
npm install --save eslint @theorem/eslint-plugin
```

Create an `.eslintrc.js` file:

```js
module.exports = {
  env: {
    // Tweak as relevant
    browser: true,
    node: true
  },
  // For new projects, consider "plugin:@theorem/opinionated".
  // For existing big projects that have a lot of warnings, consider "plugin:@theorem/minimal".
  extends: ["plugin:@theorem/recommended"],
  plugins: ["@theorem"]
};
```

Add a script to your package.json:

```json
{
  "scripts": {
    "lint": "eslint --ext js,jsx,ts,tsx src"
  }
}
```

Run with `npm run lint` and address the concerns.

If you disagree with a rule or you want to postpone handling it for later, disable in your .eslintrc.js:

```js
module.exports = {
  rules: {
    "react-hooks/exhaustive-deps": "off"
  }
};
```

Finally, once linting shows no errors, add it to your CI run to ensure the expected level going forward.
