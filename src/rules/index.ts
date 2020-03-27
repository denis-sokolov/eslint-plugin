import { customRules } from "../custom";
import type { Rules } from "../eslint";
import noDoubleNegativeVariables from "./no-double-negative-variables";
import noEnums from "./no-enums";
import noNonNullAssertion from "./no-non-null-assertion";
import noPositionalBooleanParameters from "./no-positional-boolean-parameters";
import noReactKeyPrefix from "./no-react-key-prefix";
import noTodos from "./no-todos";

export const rules: Rules = {
  "no-double-negative-variables": noDoubleNegativeVariables,
  "no-enums": noEnums,
  "no-non-null-assertion": noNonNullAssertion,
  "no-positional-boolean-parameters": noPositionalBooleanParameters,
  "no-react-key-prefix": noReactKeyPrefix,
  "no-todos": noTodos,
  ...customRules(),
};
