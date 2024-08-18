import type { Rule } from "../eslint";

const rule: Rule = {
  create: function (context) {
    return {
      TSTypeParameterDeclaration: function (node) {
        for (const param of node.params) {
          if (param.name.name.length === 1) {
            context.report({
              message: `Generic type names are names like any other, and there is no reason to keep them to a single letter. Use descriptive names, like “Item” or “Value”`,
              node: param,
            });
          }
        }
      },
    };
  },
};

export default rule;
