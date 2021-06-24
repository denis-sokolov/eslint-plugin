import { customRules } from "../custom";
import type { Rules } from "../eslint";
import checkCustomHookDependencies from "./check-custom-hook-dependencies";
import maxLines from "./max-lines";
import noDoubleNegativeVariables from "./no-double-negative-variables";
import noEnums from "./no-enums";
import noImportsDown from "./no-imports-down";
import noImportsUp from "./no-imports-up";
import noInterfaces from "./no-interfaces";
import noNonNullAssertion from "./no-non-null-assertion";
import noPositionalBooleanParameters from "./no-positional-boolean-parameters";
import noReactKeyPrefix from "./no-react-key-prefix";
import noTodos from "./no-todos";

export const rules: Rules = {
  "check-custom-hook-dependencies": checkCustomHookDependencies,
  "max-lines": maxLines,
  "no-double-negative-variables": noDoubleNegativeVariables,
  "no-enums": noEnums,
  "no-imports-down": noImportsDown,
  "no-imports-up": noImportsUp,
  "no-interfaces": noInterfaces,
  "no-non-null-assertion": noNonNullAssertion,
  "no-positional-boolean-parameters": noPositionalBooleanParameters,
  "no-react-key-prefix": noReactKeyPrefix,
  "no-todos": noTodos,
  ...customRules(),
};
