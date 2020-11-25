import type { Rule } from "../eslint";

const rule: Rule = {
  create: function (context) {
    return {
      TSInterfaceDeclaration(node) {
        // Augmenting globals
        if (node.id.name === "Window") return;

        // declare module "foo"
        if (
          node.parent?.type === "TSModuleBlock" &&
          node.parent.parent?.type === "TSModuleDeclaration"
        )
          return;

        context.report({
          message: [
            "Avoid using interface keyword, use type instead: type Size = { height: number }.",
            "Interface keyword and type keyword define exactly the same types, this is purely a syntactic distinction.",
            "Where you would use Foo extends Bar { ... }, use Foo = Bar & ...",
            `If you are augmenting a 3rd-party interface, please disable this rule by placing an // eslint-disable-next-line ${context.id}`,
          ].join(" "),
          node,
        });
      },
    };
  },
};

export default rule;
