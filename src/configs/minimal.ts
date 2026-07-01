import promise from "eslint-plugin-promise";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";
import typescriptEslint from "typescript-eslint";

import { plugin } from "../plugin-object";

export const minimal = defineConfig([
  {
    extends: [typescriptEslint.configs.base],

    plugins: {
      "@denis-sokolov": plugin,
      promise,
      "react-hooks": reactHooks,
    },

    rules: {
      "@denis-sokolov/no-old-globals": [
        // Rule level
        "error",

        // Names
        "closed",
        "event",
        "name",
        "length",
        "parent",
        "top",
      ],

      "@typescript-eslint/no-empty-interface": "error",
      "@typescript-eslint/no-extra-non-null-assertion": "error",
      "@typescript-eslint/no-misused-new": "error",
      "@typescript-eslint/no-namespace": "error",
      "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
      "@typescript-eslint/triple-slash-reference": [
        "error",
        {
          lib: "never",
          path: "never",
          types: "never",
        },
      ],

      "promise/no-new-statics": "error",

      // React 17

      "react/react-in-jsx-scope": "off",

      "react-hooks/rules-of-hooks": "error",

      "no-async-promise-executor": "error",
      "no-await-in-loop": "error",
      "no-caller": "error",
      "no-compare-neg-zero": "error",
      "no-cond-assign": "error",
      "no-control-regex": "error",
      "no-debugger": "error",
      "no-dupe-args": "error",
      "no-dupe-else-if": "error",
      "no-dupe-keys": "error",
      "no-duplicate-case": "error",
      "no-empty-character-class": "error",
      "no-import-assign": "error",
      "no-invalid-regexp": "error",
      "no-irregular-whitespace": "error",
      "no-iterator": "error",
      "no-misleading-character-class": "error",
      "no-nonoctal-decimal-escape": "error",
      "no-self-compare": "error",
      "no-setter-return": "error",
      "no-unexpected-multiline": "error",
      "no-unmodified-loop-condition": "error",
      "no-unreachable": "error",
      "no-unsafe-negation": "error",
      "no-useless-backreference": "error",
      "require-atomic-updates": "error",
      "use-isnan": "error",
      "valid-typeof": "error",
    },

    settings: {
      react: {
        version: "19.2",
      },
    },
  },
]);
