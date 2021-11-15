import { builtinRules } from "eslint/use-at-your-own-risk";
import { reword } from "../eslint";

const baseRule = builtinRules.get("max-lines");
const rule = reword(baseRule, (params) => {
  const max = String((params.data as any)?.max || "");

  return [
    "Avoid very long files.",
    "If it’s a single module, consider splitting it into multiple, smaller, narrower modules.",
    "If it’s multiple modules in one file, then consider that most teammates use directories and files as structure as opposed to in-file navigation.",
    max ? `The arbitrary file length limit is currently ${max} lines.` : "",
  ].join(" ");
});

export default rule;
