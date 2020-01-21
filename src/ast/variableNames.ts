import { AST_NODE_TYPES, Node, TSESTree } from "./types";

type Result = { name: string; node: Node }[];

export function variableNames(
  expr:
    | TSESTree.Expression
    | TSESTree.AssignmentPattern
    | TSESTree.BindingName
    | TSESTree.Parameter,
  options: {
    includeDestructuring?: boolean;
  } = {}
): Result {
  const { includeDestructuring } = options;

  if (expr.type === AST_NODE_TYPES.Identifier) {
    return [
      {
        name: expr.name,
        node: expr
      }
    ];
  }

  if (includeDestructuring && expr.type === AST_NODE_TYPES.ArrayPattern) {
    return expr.elements
      .map(el => {
        if (!el) return [];
        return variableNames(el, options);
      })
      .flat();
  }

  if (includeDestructuring && expr.type === AST_NODE_TYPES.ObjectPattern) {
    return expr.properties
      .map(p => {
        if (p.type !== AST_NODE_TYPES.Property) return [];
        return variableNames(p.value, options);
      })
      .flat();
  }

  return [];
}
