import { variableNames, Node } from "../ast";
import { Rule } from "../eslint";

const rule: Rule = {
  create: function(context) {
    const isBoolean = (name: string): boolean => {
      return Boolean(
        name.match(/^enabled|disabled|hidden$/) ||
          name.match(/^(can|has|hide|is|no|show|will)[A-Z]/)
      );
    };
    const validate = (names: { name: string; node: Node }[]) => {
      names
        .filter(({ name }) => isBoolean(name))
        .forEach(({ node }) => {
          context.report({
            message: `Avoid boolean positional parameters: use named parameters or even separate functions. Instead of onEdit(true), use onEdit({ isNew: true }), or, even better, onEdit() and onNew().`,
            node
          });
        });
    };
    return {
      ArrowFunctionExpression(node) {
        validate(node.params.map(n => variableNames(n)).flat());
      },
      FunctionExpression(node) {
        validate(node.params.map(n => variableNames(n)).flat());
      },
      FunctionDeclaration(node) {
        validate(node.params.map(n => variableNames(n)).flat());
      }
    };
  }
};

export default rule;
