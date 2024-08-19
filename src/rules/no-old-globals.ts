import { builtinRules } from "eslint/use-at-your-own-risk";

import { reword } from "../eslint";

const baseRule = builtinRules.get("no-restricted-globals");
const rule = reword(
  baseRule,
  [
    "This is an old global variable that probably does not do what you want.",
    "Look for typos in your code, perhaps a missing const somewhere.",
  ].join(" "),
);

export default rule;
