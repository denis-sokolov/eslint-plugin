import perfectionist from "eslint-plugin-perfectionist";
import sortKeysPlus from "eslint-plugin-sort-keys-plus";
import { defineConfig } from "eslint/config";

import { recommended } from "./recommended";

export const opinionated = defineConfig([
  {
    extends: [perfectionist.configs["recommended-natural"], recommended],

    plugins: {
      "sort-keys-plus": sortKeysPlus,
    },

    rules: {
      "@denis-sokolov/max-lines": ["error", 200],
      "@denis-sokolov/no-imports-down": "error",
      "@denis-sokolov/no-imports-up": "error",
      "@denis-sokolov/no-interfaces": "error",
      "@typescript-eslint/adjacent-overload-signatures": "error",

      "@typescript-eslint/consistent-type-assertions": [
        "error",
        {
          assertionStyle: "as",
        },
      ],

      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
        },
      ],

      "@typescript-eslint/no-inferrable-types": "error",
      eqeqeq: ["error", "smart"],
      "import/consistent-type-specifier-style": ["error", "prefer-inline"],
      "jsx-a11y/media-has-caption": "error",
      "jsx-a11y/tabindex-no-positive": "error",
      "max-params": ["error", 3],

      "perfectionist/sort-interfaces": [
        "error",
        {
          type: "natural",
        },
      ],

      "perfectionist/sort-imports": [
        "error",
        {
          groups: [
            ["builtin", "builtin-type", "external", "external-type"],
            ["internal", "internal-type"],
            ["parent", "parent-type"],
            ["index", "index-type", "sibling", "sibling-type"],
            "object",
            "unknown",
            ["side-effect", "side-effect-style"],
          ],
        },
      ],

      "perfectionist/sort-jsx-props": [
        "error",
        {
          ignoreCase: false,
          type: "natural",
        },
      ],

      "perfectionist/sort-named-exports": [
        "error",
        {
          groupKind: "types-first",
          type: "natural",
        },
      ],

      "perfectionist/sort-named-imports": [
        "error",
        {
          groupKind: "types-first",
          ignoreAlias: true,
          type: "natural",
        },
      ],

      "perfectionist/sort-objects": [
        "error",
        {
          partitionByNewLine: true,
        },
      ],

      "prefer-const": "error",

      "sort-keys-plus/sort-keys": [
        "error",
        "asc",
        {
          allowLineSeparatedGroups: true,
          natural: true,
        },
      ],
    },
  },
]);
