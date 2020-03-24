import { jsxAttributeValue, variablesUsed } from "../ast";
import { Rule } from "../eslint";

const rule: Rule = {
  create: function (context) {
    return {
      JSXOpeningElement(node) {
        const value = jsxAttributeValue(node, "key");
        if (!value) return;
        if (value.type === "Identifier") return;

        const vars = variablesUsed(value);
        const includesIndex = vars.some(({ name }) =>
          ["i", "index", "n"].includes(name)
        );
        if (!includesIndex) return;

        context.report({
          message: [
            "Index in key needs no further detailing.",
            "If you include the positional index in the key, then you’re effectively opting out of optimizations and no amount of detail added helps at all.",
            "Either find a real key, like an id, or sometimes string content, or just use key={index}.",
          ].join(" "),
          node,
        });
      },
    };
  },
};

export default rule;
