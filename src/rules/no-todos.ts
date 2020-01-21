import { Rule } from "../eslint";

const rule: Rule = {
  create: function(context) {
    const sourceCode = context.getSourceCode();
    return {
      Program() {
        const comments = sourceCode.getAllComments();
        comments.forEach(node => {
          const text = node.value;

          if (!text.includes("TODO")) return;

          context.report({
            message: [
              "Avoid leaving TODOs in comments.",
              "If this is something that really needs to be done soon, consider keeping track of it in the project’s task manager, where it will be visible and prioritized.",
              "If this is not something to be done, but, rather, an explanation of the code’s deficiency, provide more detail to future programmers, and most importantly, provide your reasons for the trade-off."
            ].join(" "),
            node
          });
        });
      }
    };
  }
};

export default rule;
