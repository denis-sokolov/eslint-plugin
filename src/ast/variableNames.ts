import { flat } from "../flat";

import { type Node, type TSESTree, AST_NODE_TYPES } from "./types";

type Result = { name: string; node: Node }[];

export function variableNames(
  expr:
    | TSESTree.AssignmentPattern
    | TSESTree.BindingName
    | TSESTree.Expression
    | TSESTree.Parameter
    | TSESTree.TSEmptyBodyFunctionExpression,
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
