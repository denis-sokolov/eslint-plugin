export const minimal = {
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
  plugins: ["@typescript-eslint", "promise", "react-hooks"],
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
    "no-iterator": "error",
    "no-invalid-regexp": "error",
    "no-irregular-whitespace": "error",
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
      // Silence the warning for projects that do not use React
      version: "latest",
    },
  },
};
