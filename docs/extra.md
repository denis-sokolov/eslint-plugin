# Advanced features

Reword the warning message of an existing rule you got:

```ts
import { reword } from "@denis-sokolov/eslint-plugin";
const rule = reword(
  existingRule,
  "This is a much nicer message explaining what not to do and what to do instead.",
);
```

Filter some errors that an existing rule produces for you:

```ts
import { filter } from "@denis-sokolov/eslint-plugin";
const rule = filter(existingRule, function ({ node, message }) {
  return true;
});
```
