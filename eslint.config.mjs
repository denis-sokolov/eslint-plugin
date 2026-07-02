import { createRequire } from "node:module";

import { defineConfig, globalIgnores } from "eslint/config";

const require = createRequire(import.meta.url);

const denisSokolov =
  require("./node_modules/@denis-sokolov/eslint-plugin/dist/index.js").default;

export default defineConfig([
  {
    extends: denisSokolov.configs.opinionated,
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    rules: {
      // Importing a lot of implementation details from eslint package
      "@denis-sokolov/no-imports-down": "off",

      // Our tests include string samples of code
      "no-template-curly-in-string": "off",
    },
  },
  globalIgnores(["dist/"]),
]);
