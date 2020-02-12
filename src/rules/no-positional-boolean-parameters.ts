import { variableNames, Node } from "../ast";
import { Rule } from "../eslint";
import { flat } from "../flat";

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
        validate(flat(node.params.map(n => variableNames(n))));
      },
      FunctionExpression(node) {
        validate(flat(node.params.map(n => variableNames(n))));
      },
      FunctionDeclaration(node) {
        validate(flat(node.params.map(n => variableNames(n))));
      }
    };
  }
};

export default rule;
