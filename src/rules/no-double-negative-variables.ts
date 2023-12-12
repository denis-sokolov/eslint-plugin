import { type Node, variableNames } from "../ast";
import { type Rule } from "../eslint";
import { flat } from "../flat";

const rule: Rule = {
  create: function (context) {
    const clean = (name: string): string => {
      if (name.match(/^no[A-Z]/)) return name[2].toLowerCase() + name.substr(3);
      if (name.match(/^hide[A-Z]/)) return "show" + name.substr(4);
      return name;
    };
    const isValid = (name: string) => name === clean(name);
    const validate = (names: { name: string; node: Node }[]) => {
      names
        .filter(({ name }) => !isValid(name))
        .forEach(({ name, node }) => {
          context.report({
            message: [
              `Avoid negative names, this does not lead to not being confused about the resulting double negatives.`,
              `For instance, imagine a conditional \`if (!${name})\`.`,
              `Instead of “${name}”, consider “${clean(
                name,
              )}” instead and add a negation everywhere it’s used.`,
              `If the number of negations you will add bothers you, consider that it is a random accident and after tomorrow’s changes the code may have more inversions instead.`,
              `It is more valuable for the name to describe its contents and not how it happens to be used.`,
            ].join(" "),
            node,
          });
        });
    };
    return {
      ArrowFunctionExpression(node) {
        validate(
          flat(
            node.params.map((n: any) =>
              variableNames(n, { includeDestructuring: true }),
            ),
          ),
        );
      },
      FunctionDeclaration(node) {
        validate(
          flat(
            node.params.map((n: any) =>
              variableNames(n, { includeDestructuring: true }),
            ),
          ),
        );
      },
      FunctionExpression(node) {
        validate(
          flat(
            node.params.map((n: any) =>
              variableNames(n, { includeDestructuring: true }),
            ),
          ),
        );
      },
      VariableDeclaration(node) {
        validate(
          flat(
            node.declarations.map((d: any) =>
              variableNames(d.id, { includeDestructuring: true }),
            ),
          ),
        );
      },
    };
  },
};

export default rule;
