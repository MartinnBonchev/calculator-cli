const TEST_EXPRESSION_PATTERN = /^[\d+\-\+\*\/()]*$/g;

export default function getValidExpression(expression: string) {
  if (expression.length === 0) {
    throw new Error("Please provide an input!");
  }

  if (!TEST_EXPRESSION_PATTERN.test(expression)) {
    throw new Error("Invalid input!");
  }

  if (expression.split(")").length !== expression.split("(").length) {
    throw new Error(
      "The provided input contains a different number of parentheses!"
    );
  }

  return expression;
}
