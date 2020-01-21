import { AST_NODE_TYPES, Node } from "./types";

export function descendantsAndSelf(node: Node): Node[] {
  const andSelf = (...lists: Node[][]) => {
    const res = lists.flat();
    res.push(node);
    return res;
  };

  if (node.type === AST_NODE_TYPES.ArrayExpression)
    return andSelf(...node.elements.map(descendantsAndSelf));

  if (node.type === AST_NODE_TYPES.BinaryExpression)
    return andSelf(
      descendantsAndSelf(node.left),
      descendantsAndSelf(node.right)
    );

  if (node.type === AST_NODE_TYPES.CallExpression) {
    return andSelf(
      descendantsAndSelf(node.callee),
      node.arguments.map(descendantsAndSelf).flat()
    );
  }

  if (node.type === AST_NODE_TYPES.ConditionalExpression)
    return andSelf(
      descendantsAndSelf(node.test),
      descendantsAndSelf(node.consequent),
      descendantsAndSelf(node.alternate)
    );

  if (node.type === AST_NODE_TYPES.Literal) return andSelf();

  if (node.type === AST_NODE_TYPES.MemberExpression)
    return andSelf(
      descendantsAndSelf(node.object),
      descendantsAndSelf(node.property)
    );

  if (node.type === AST_NODE_TYPES.TemplateLiteral)
    return andSelf(...node.expressions.map(descendantsAndSelf));

  return andSelf();
}
