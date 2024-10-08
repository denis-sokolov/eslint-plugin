import { type Rules } from "../eslint";

import exhaustiveDepsAsync from "./exhaustive-deps-async";
import maxLines from "./max-lines";
import noDoubleNegativeVariables from "./no-double-negative-variables";
import noEnums from "./no-enums";
import noImportsDown from "./no-imports-down";
import noImportsUp from "./no-imports-up";
import noInterfaces from "./no-interfaces";
import noNonNullAssertion from "./no-non-null-assertion";
import noOldGlobals from "./no-old-globals";
import noPositionalBooleanParameters from "./no-positional-boolean-parameters";
import noReactKeyPrefix from "./no-react-key-prefix";
import noSingleLetterGenericTypes from "./no-single-letter-generic-types";
import noTodos from "./no-todos";

export const rules: Rules = {
  "exhaustive-deps-async": exhaustiveDepsAsync,
  "max-lines": maxLines,
  "no-double-negative-variables": noDoubleNegativeVariables,
  "no-enums": noEnums,
  "no-imports-down": noImportsDown,
  "no-imports-up": noImportsUp,
  "no-interfaces": noInterfaces,
  "no-non-null-assertion": noNonNullAssertion,
  "no-old-globals": noOldGlobals,
  "no-positional-boolean-parameters": noPositionalBooleanParameters,
  "no-react-key-prefix": noReactKeyPrefix,
  "no-single-letter-generic-types": noSingleLetterGenericTypes,
  "no-todos": noTodos,
};
