import { descendantsAndSelf } from "./descend";
import { AST_NODE_TYPES, type Node } from "./types";
type Result = { name: string; node: Node }[];

export function variablesUsed(node: Node): Result {
  return descendantsAndSelf(node)
    .map(function (n) {
      if (n.type !== AST_NODE_TYPES.Identifier) return undefined;
      if (
        n.parent &&
        n.parent.type === AST_NODE_TYPES.MemberExpression &&
        n.parent.object !== n
      )
        return;
      return { name: n.name, node: n };
    })
    .filter((v) => v)
    .map(function (v) {
      if (!v) throw new Error();
      return v;
    });
}
