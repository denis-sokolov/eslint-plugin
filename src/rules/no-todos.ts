import { type Rule } from "../eslint";

function commentHasTodos(text: string) {
  return Boolean(
    text.match(/\b(FIXME|XXX)\b/) ||
      text.match(/\b(BUG|TODO)\b(?!-)/) ||
      text.match(/\b(Fixme|Todo)\b/) ||
      text.match(/\b(fixme|xxx)\b/) ||
      text.match(/\b(bug|fix|todo):/),
  );
}

const rule: Rule = {
  create: function (context) {
    const sourceCode = context.getSourceCode();
    return {
      Program() {
        const comments = sourceCode.getAllComments();
        comments.forEach((node) => {
          if (!commentHasTodos(node.value)) return;

          context.report({
            message: [
              "Avoid leaving TODOs in comments.",
              "If this is something that really needs to be done soon, consider keeping track of it in the project’s task manager, where it will be visible and prioritized.",
              "If this is not something to be done, but, rather, an explanation of the code’s deficiency, provide more detail to future programmers, provide your reasons for the trade-off, and assume the code will stay as is for a while.",
            ].join(" "),
            node,
          });
        });
      },
    };
  },
};

export default rule;
