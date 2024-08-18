import { recommended } from "./recommended";

export const opinionated = {
  ...recommended,
  extends: [
    ...recommended.extends,
    "plugin:perfectionist/recommended-natural-legacy",
  ],
  plugins: [...recommended.plugins, "perfectionist"],
  rules: {
    ...recommended.rules,

    "@denis-sokolov/max-lines": [2, 200],
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
    "@typescript-eslint/prefer-optional-chain": "error",

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

    // https://github.com/azat-io/eslint-plugin-perfectionist/issues/222
    // "perfectionist/sort-objects": ["error", { partitionByNewLine: true }]
    "perfectionist/sort-objects": "off",
    "perfectionist/sort-object-types": "off",

    "perfectionist/sort-intersection-types": "off",
    "perfectionist/sort-union-types": "off",

    "prefer-const": "error",
  },
};
