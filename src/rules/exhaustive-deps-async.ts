/**
 * The goal of this rule is to filter the regular exhaustive-deps
 * to only provide warnings about exhaustive-deps, and not about
 * effect parameter being async.
 */

import { rules } from "eslint-plugin-react-hooks";
import { filter } from "../eslint";

const rule = filter(rules["exhaustive-deps"], (params) => {
  if (!params.message?.includes("synchronous")) return true;

  const { node } = params;
  if (node.type !== "ArrowFunctionExpression") return false;
  if (!node.parent) return false;
  if (node.parent.type !== "CallExpression") return false;
  if (node.parent.callee.type !== "Identifier") return false;
  const name = node.parent.callee.name;

  const usesOriginalHook = [
    "useCallback",
    "useEffect",
    "useImperativeHandle",
    "useLayoutEffect",
    "useMemo",
  ].includes(name);
  return usesOriginalHook;
});

export default rule;
