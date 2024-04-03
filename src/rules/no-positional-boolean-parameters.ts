import { Parameter } from "../ast";
import type { Rule } from "../eslint";

const message = `Avoid boolean positional parameters: use named parameters or even separate functions. Instead of onEdit(true), use onEdit({ isNew: true }), or, even better, onEdit() and onNew().`;

const rule: Rule = {
  create: function (context) {
    const isBoolean = (name: string): boolean => {
      return Boolean(
        name.match(/^enabled|disabled|hidden$/) ||
          name.match(/^(can|has|hide|is|no|show|will)[A-Z]/),
      );
    };
    const validate = (parameters: Parameter[]) => {
      for (const param of parameters) {
        if (param.type === "Identifier") {
          if (param.typeAnnotation) {
            if (
              param.typeAnnotation.typeAnnotation.type === "TSBooleanKeyword"
            ) {
              context.report({ message, node: param });
            }
            return;
          }

          const name = param.name;
          if (isBoolean(name)) {
            context.report({ message, node: param });
          }
        }
      }
    };
    return {
      ArrowFunctionExpression(node) {
        validate(node.params);
      },
      FunctionExpression(node) {
        validate(node.params);
      },
      FunctionDeclaration(node) {
        validate(node.params);
      },
    };
  },
};

export default rule;
