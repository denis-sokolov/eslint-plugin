import type { Rule } from "../eslint";

const rule: Rule = {
  create: function (context) {
    return {
      TSInterfaceDeclaration(node) {
        context.report({
          message: [
            "Avoid using interface keyword, use type instead: type Size = { height: number }.",
            "Interface keyword and type keyword define exactly the same types, this is purely a syntactic distinction.",
            "Where you would use Foo extends Bar { ... }, use Foo = Bar & ...",
          ].join(" "),
          node,
        });
      },
    };
  },
};

export default rule;
