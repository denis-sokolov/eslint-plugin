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

const recommended = {
  ...minimal,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
  ],
  plugins: [...minimal.plugins, "import", "jsx-a11y"],
  rules: {
    ...minimal.rules,

    "@theorem/max-lines": [2, 500],
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

    "jsx-a11y/alt-text": "error",
    "jsx-a11y/anchor-has-content": "error",
    "jsx-a11y/anchor-is-valid": "error",
    "jsx-a11y/aria-activedescendant-has-tabindex": "error",
    "jsx-a11y/aria-props": "error",
    "jsx-a11y/aria-proptypes": "error",
    "jsx-a11y/aria-role": ["error", { ignoreNonDOM: true }],
    "jsx-a11y/aria-unsupported-elements": "error",
    "jsx-a11y/autocomplete-valid": [
      "error",
      { inputComponents: ["Input", "FormField"] },
    ],
    // Click forwarding to an interactive element is a major false positive
    // "jsx-a11y/click-events-have-key-events": "error",
    "jsx-a11y/heading-has-content": "error",
    "jsx-a11y/iframe-has-title": "error",
    "jsx-a11y/img-redundant-alt": "error",
    "jsx-a11y/interactive-supports-focus": "error",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        labelComponents: ["CustomLabel"],
        controlComponents: ["Input", "Textarea"],
        depth: 5,
      },
    ],
    "jsx-a11y/lang": "error",
    "jsx-a11y/mouse-events-have-key-events": "error",
    "jsx-a11y/no-noninteractive-tabindex": "error",
    "jsx-a11y/no-redundant-roles": "error",
    "jsx-a11y/role-has-required-aria-props": "error",
    "jsx-a11y/role-supports-aria-props": "error",

    // Not enough benefit
    "react/no-children-prop": "off",
    // Warnings on ' and " are too complicated at little benefit
    "react/no-unescaped-entities": ["error", { forbid: [">", "}"] }],
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

    "react-hooks/exhaustive-deps": "error",
    "@theorem/check-custom-hook-dependencies": [
      "error",
      { additionalHooks: "(use.+(Callback|Effect|Memo))" },
    ],
  },
  settings: { react: { version: "detect" } },
};

const opinionated = {
  ...recommended,
  rules: {
    ...recommended.rules,

    "@theorem/max-lines": [2, 200],
    "@theorem/no-imports-down": "error",
    "@theorem/no-imports-up": "error",
    "@theorem/no-interfaces": "error",

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
    "no-undef": "error",
    "prefer-const": "error",
  },
};

export const configs = {
  minimal,
  recommended,
  opinionated,
  ...customConfigs(),
};
