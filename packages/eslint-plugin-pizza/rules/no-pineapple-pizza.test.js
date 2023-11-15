import rule from "./no-pineapple-pizza.js";
import { RuleTester } from "eslint";

const ruleTester = new RuleTester({
  // Must use at least ecmaVersion 2015 because
  // that's when `const` variables were introduced.
  parserOptions: { ecmaVersion: 2015 },
});

ruleTester.run(
  "no-pineapple-pizza", // rule name
  rule, // rule code
  {
    valid: [
      {
        code: "const yummyPizza = eatPizzaMargherita();",
      },
    ],
    // 'invalid' checks cases that should not pass
    invalid: [
      {
        code: "const yummyPizza = eatPineapplePizza();",
        output: "const yummyPizza = eatPizzaMargherita();",
        errors: 1,
      },
    ],
  }
);

console.log(`[SUCCESS] no-pineapple-pizza`);
