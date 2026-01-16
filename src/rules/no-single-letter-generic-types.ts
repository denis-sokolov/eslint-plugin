import { type Rule } from "../eslint";

const rule: Rule = {
  create: function (context) {
    return {
      TSTypeParameter: function (node) {
        if (node.name.name.length === 1) {
          context.report({
            message: `Generic type names are names like any other, and there is no reason to keep them to a single letter. Use descriptive names, like “Item” or “Value”`,
            node,
          });
        }
      },
    };
  },
};

export default rule;
