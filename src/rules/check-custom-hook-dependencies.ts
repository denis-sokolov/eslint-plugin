/**
 * The goal of this rule is to filter the regular exhaustive-deps
 * to only provide warnings about exhaustive-deps, and not about
 * effect parameter being async.
 */

import { rules } from "eslint-plugin-react-hooks";
import { filter } from "../eslint";

const rule = filter(rules["exhaustive-deps"], (params) => {
  if (params.message?.includes("synchronous")) return false;

  if (
    params.message?.match(
      /\buse(Callback|Effect|ImperativeHandle|LayoutEffect|Memo)\b/,
    )
  )
    return false;

  return true;
});

export default rule;
