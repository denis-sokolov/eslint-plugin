import baseRule from "@typescript-eslint/eslint-plugin/dist/rules/no-non-null-assertion";
import { reword } from "../eslint";

const rule = reword(
  baseRule,
  [
    "Avoid the exclamation mark operator.",
    "It implies you know that the value is non-null, but this belief is opaque to teammates, and possibly incorrect.",
    "For the simplest solution, add a check above: if (!value) throw new Error(`Expected value to be present!`).",
    "This clearly communicates the assumption to your teammates and keeps the behavior of the system predictable.",
  ].join(" "),
);

export default rule;
