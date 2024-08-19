import { flat } from "../flat";

import { AST_NODE_TYPES, type Node, type TSESTree } from "./types";

type Result = { name: string; node: Node }[];

export function variableNames(
  expr:
    | TSESTree.TSEmptyBodyFunctionExpression
    | TSESTree.Expression
    | TSESTree.AssignmentPattern
    | TSESTree.BindingName
    | TSESTree.Parameter,
  options: {
    includeDestructuring?: boolean;
  } = {},
): Result {
  const { includeDestructuring } = options;

  if (expr.type === AST_NODE_TYPES.Identifier) {
    return [
      {
        name: expr.name,
        node: expr,
      },
    ];
  }

  if (includeDestructuring && expr.type === AST_NODE_TYPES.ArrayPattern) {
    return flat(
      expr.elements.map((el) => {
        if (!el) return [];
        return variableNames(el, options);
      }),
    );
  }

  if (includeDestructuring && expr.type === AST_NODE_TYPES.ObjectPattern) {
    return flat(
      expr.properties.map((p) => {
        if (p.type !== AST_NODE_TYPES.Property) return [];
        return variableNames(p.value, options);
      }),
    );
  }

  return [];
}
