function addParentheses(char: string) {
  if (char === "(") {
    return 1;
  }

  if (char === ")") {
    return -1;
  }

  return 0;
}

export default function findClosingParenthesis(
  subExpression: string,
  openParentheses: number = 0,
  index = 0
): number {
  const currentChar = subExpression[0];

  if (currentChar === ")" && openParentheses - 1 === 0) {
    return index;
  }

  return findClosingParenthesis(
    subExpression.substring(1),
    openParentheses + addParentheses(currentChar),
    index + 1
  );
}
