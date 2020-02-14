const minimal = {
  env: {
    es6: true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["@typescript-eslint", "react-hooks"],
  rules: {
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/triple-slash-reference": [
      "error",
      { path: "never", types: "never", lib: "never" }
    ],

    "react-hooks/rules-of-hooks": "error",

    "no-async-promise-executor": "error",
    "no-await-in-loop": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-dupe-args": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-else-return": "error",
    "no-empty-character-class": "error",
    "no-import-assign": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
    "no-misleading-character-class": "error",
    "no-unexpected-multiline": "error",
    "no-unreachable": "error",
    "no-unsafe-negation": "error",
    "use-isnan": "error",
    "valid-typeof": "error"
  }
};

const recommended = {
  ...minimal,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:react/recommended"
  ],
  rules: {
    ...minimal.rules,

    "@theorem/no-double-negative-variables": "error",
    "@theorem/no-enums": "error",
    "@theorem/no-non-null-assertion": "error",
    "@theorem/no-positional-boolean-parameters": "error",
    "@theorem/no-react-key-prefix": "error",
    "@theorem/no-todos": "error",

    // This modifies eslint no-unused-vars with ts awareness
    "@typescript-eslint/no-unused-vars": "error",
    // Not enough benefit
    "react/no-children-prop": "off",
    // Irrelevant with TypeScript
    "react/prop-types": "off",

    "no-var": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error"
  },
  settings: { react: { version: "detect" } }
};

const opinionated = {
  ...recommended,
  rules: {
    ...recommended.rules,

    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      { assertionStyle: "as" }
    ],
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/prefer-optional-chain": "error",

    "react-hooks/exhaustive-deps": "error",

    "prefer-const": "error"
  }
};

export const configs = {
  minimal,
  recommended,
  opinionated
};
