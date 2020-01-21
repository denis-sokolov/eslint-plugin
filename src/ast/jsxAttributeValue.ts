import { AST_NODE_TYPES, TSESTree } from "./types";

export function jsxAttributeValue(
  node: TSESTree.JSXOpeningElement,
  name: string
) {
  const keyAttribute = node.attributes.find(a => {
    if ((a.type as any) === "JSXSpreadAttribute") return false;
    if (!a.name) return false;
    return a.name.name === name;
  });
  if (!keyAttribute) return;
  const value = keyAttribute.value;
  if (!value) return;
  if (value.type !== AST_NODE_TYPES.JSXExpressionContainer) return;
  return value.expression;
}
