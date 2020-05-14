import { customConfigs } from "../custom";

const minimal = {
  env: {
    es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react-hooks"],
  rules: {
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/triple-slash-reference": [
      "error",
      { path: "never", types: "never", lib: "never" },
    ],

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
    "no-iterator": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-misleading-character-class": "error",
    "no-self-compare": "error",
    "no-setter-return": "error",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unreachable": "error",
    "no-unsafe-negation": "error",
    "require-atomic-updates": "error",
    "use-isnan": "error",
    "valid-typeof": "error",
  },
};

const recommended = {
  ...minimal,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
  ],
  plugins: [...minimal.plugins, "import"],
  rules: {
    ...minimal.rules,

    "@theorem/no-double-negative-variables": "error",
    "@theorem/no-enums": "error",
    "@theorem/no-non-null-assertion": "error",
    "@theorem/no-positional-boolean-parameters": "error",
    "@theorem/no-react-key-prefix": "error",
    "@theorem/no-todos": "error",

    "@typescript-eslint/no-unused-expressions": "error",

    // TypeScript compiler already warns about it, resulting in duplicate warnings in the editor
    "@typescript-eslint/no-unused-vars": "off",
    "no-unused-vars": "off",

    "import/no-cycle": "error",

    // Not enough benefit
    "react/no-children-prop": "off",
    // Irrelevant with TypeScript
    "react/prop-types": "off",

    "no-sequences": "error",
    "no-shadow": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    // Less relevant with TypeScript, has false positives with globals
    "no-undef": "off",
    "no-var": "error",
    "prefer-promise-reject-errors": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
  },
  settings: { react: { version: "detect" } },
};

const opinionated = {
  ...recommended,
  rules: {
    ...recommended.rules,

    "@theorem/no-interfaces": "error",

    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "as" },
    ],
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/prefer-optional-chain": "error",

    "react-hooks/exhaustive-deps": "error",

    eqeqeq: ["error", "smart"],
    "no-undef": "error",
    "prefer-const": "error",
    yoda: "error",
  },
};

export const configs = {
  minimal,
  recommended,
  opinionated,
  ...customConfigs(),
};
