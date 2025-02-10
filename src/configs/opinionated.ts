import { recommended } from "./recommended";

export const opinionated = {
  ...recommended,
  extends: [
    ...recommended.extends,
    "plugin:perfectionist/recommended-natural-legacy",
  ],
  plugins: [
    ...recommended.plugins,
    "perfectionist",
    "sort-keys-plus",
    "typescript-sort-keys",
  ],
  rules: {
    ...recommended.rules,

    "@denis-sokolov/max-lines": ["error", 200],
    "@denis-sokolov/no-imports-down": "error",
    "@denis-sokolov/no-imports-up": "error",
    "@denis-sokolov/no-interfaces": "error",

    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "as" },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { fixStyle: "inline-type-imports" },
    ],
    "@typescript-eslint/no-inferrable-types": "error",

    "import/consistent-type-specifier-style": ["error", "prefer-inline"],

    "jsx-a11y/media-has-caption": "error",
    "jsx-a11y/tabindex-no-positive": "error",

    eqeqeq: ["error", "smart"],

    "max-params": ["error", 3],

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
      { ignoreCase: false, type: "natural" },
    ],
    "perfectionist/sort-named-exports": [
      "error",
      { groupKind: "types-first", type: "natural" },
    ],
    "perfectionist/sort-named-imports": [
      "error",
      { groupKind: "types-first", ignoreAlias: true, type: "natural" },
    ],
    "perfectionist/sort-objects": ["error", { partitionByNewLine: true }],

    "prefer-const": "error",

    "sort-keys-plus/sort-keys": [
      "error",
      "asc",
      { allowLineSeparatedGroups: true, natural: true },
    ],

    "typescript-sort-keys/interface": [
      "error",
      "asc",
      { caseSensitive: false, natural: true },
    ],
  },
};
