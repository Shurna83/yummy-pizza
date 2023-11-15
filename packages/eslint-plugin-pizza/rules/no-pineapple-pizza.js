const rule = {
  meta: {
    type: "problem",
    fixable: "code",
    docs: {
      description: "Don't eat pineapple pizza.",
      category: "Pizza ruleset",
    },
  },
  create: function (context) {
    return {
      CallExpression(node) {
        if (
          node.callee.type === "Identifier" &&
          node.callee.name === "eatPineapplePizza"
        ) {
          context.report({
            node,
            message:
              "A notification was sent to the Italian police. They're coming. Pineapple pizza is illegal, please eat pizza Margherita instead",
            fix(fixer) {
              return fixer.replaceText(node.callee, "eatPizzaMargherita");
            },
          });
        }
      },
    };
  },
};

export default rule;
