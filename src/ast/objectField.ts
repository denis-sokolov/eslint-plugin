import { AST_NODE_TYPES, TSESTree } from "./types";

export function objectField(obj: TSESTree.ObjectExpression, key: string) {
  const props = obj.properties
    .filter(p => {
      if (p.type !== AST_NODE_TYPES.Property) return false;

      if (p.key.type === AST_NODE_TYPES.Literal) return p.key.value === "key";

      if (p.key.type === AST_NODE_TYPES.Identifier) return p.key.name === key;

      return false;
    })
    .map(p => {
      // Workaround for bad typings of .filter
      if (p.type !== AST_NODE_TYPES.Property)
        throw new Error("Should have filtered properties above");
      return p.value;
    });
  if (!props.length) return undefined;
  return props[0];
}
