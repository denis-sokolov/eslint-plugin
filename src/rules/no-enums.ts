import type { Rule } from "../eslint";

const rule: Rule = {
  create: function (context) {
    return {
      TSEnumDeclaration(node) {
        context.report({
          message: [
            "Avoid using enum keyword, use union instead: type Size = 'big' | 'small'.",
            "Enums and unions achieve the same thing, but unions do it with less syntax and more power most of the time.",
            "To get the list of values at run-time, use code like this: const sizes = ['big', 'small'] as const; type Size = typeof sizes[number].",
          ].join(" "),
          node,
        });
      },
    };
  },
};

export default rule;
