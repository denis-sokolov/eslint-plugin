import { recommended } from "./recommended";

export const opinionated = {
  ...recommended,
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
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/prefer-optional-chain": "error",

    "jsx-a11y/media-has-caption": "error",
    "jsx-a11y/tabindex-no-positive": "error",

    eqeqeq: ["error", "smart"],

    "max-params": ["error", 3],

    "prefer-const": "error",
  },
};
