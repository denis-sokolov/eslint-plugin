# Set up

Install the tools:

```
npm install --save eslint @denis-sokolov/eslint-plugin
```

Create a minimal `eslint.config.mjs` file:

```js
import denisSokolov from "@denis-sokolov/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    extends: denisSokolov.configs.recommended,
  },
]);
```

For existing big projects, replace the ruleset above with `denisSokolov.configs.minimal`.

For new projects, replace the ruleset above with `denisSokolov.configs.opinionated`.

Add a script to your package.json:

```json
{
  "scripts": {
    "lint": "eslint src"
  }
}
```

Run with `npm run lint` and address the concerns.

If you want to postpone handling a rule for later, or if you disagree with a rule (let us know!), disable in your eslint.config.js:

```js
export default defineConfig([
  {
    extends: denisSokolov.configs.recommended,
    rules: {
      "react-hooks/exhaustive-deps": "off",
    },
  },
]);
```

Finally, once linting shows no errors, add it to your CI run to ensure the expected level going forward.

## Rule options

```js
export default defineConfig([
  {
    rules: {
      "no-imports-down": [
        "error",
        {
          // Whitelist some paths as allowed
          ignoreRegexes: ["^lib/icons"],
        },
      ],
    },
  },
]);
```
