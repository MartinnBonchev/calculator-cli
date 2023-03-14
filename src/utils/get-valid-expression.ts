export default function getValidExpression(expression: string) {
  const TEST_EXPRESSION_PATTERN =
    /^(\d|(\(+\d+)*)+([+\-*/]?(\d+|(\(+\d+))|\))*$/g;

  if (expression.length === 0) {
    throw new Error("Please provide an input!");
  }

  if (expression.split(")").length !== expression.split("(").length) {
    throw new Error(
      "The provided input contains a different number of parentheses!"
    );
  }

  if (!TEST_EXPRESSION_PATTERN.test(expression)) {
    throw new Error("Invalid input!");
  }

  return expression;
}
