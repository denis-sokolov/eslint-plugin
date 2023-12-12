import { minimal } from "./minimal";

export const recommended = {
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

    "@denis-sokolov/max-lines": [2, 500],
    "@denis-sokolov/no-double-negative-variables": "error",
    "@denis-sokolov/no-enums": "error",
    "@denis-sokolov/no-non-null-assertion": "error",
    "@denis-sokolov/no-positional-boolean-parameters": "error",
    "@denis-sokolov/no-react-key-prefix": "error",
    "@denis-sokolov/no-single-letter-generic-types": "error",
    "@denis-sokolov/no-todos": "error",

    "@typescript-eslint/no-unused-expressions": "error",

    // Requires more specific project configuration (“parserServices to be generated”)
    "@typescript-eslint/prefer-optional-chain": "off",

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

    "promise/catch-or-return": "error",

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
    "@denis-sokolov/exhaustive-deps-async": [
      "error",
      { additionalHooks: "^use.+(Callback|Effect|Memo)$" },
    ],
  },
  settings: { react: { version: "detect" } },
};
