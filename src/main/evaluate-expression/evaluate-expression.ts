import concatNumber from "@utils/concat-number";
import findClosingParenthesis from "@utils/find-closing-parentheses";

export function operate(stack: number[], operator: string, digit: number) {
  switch (operator) {
    case "+": {
      return [...stack, digit];
    }
    case "-": {
      return [...stack, digit * -1];
    }
    case "*": {
      const lastAdded: number = stack.pop() || 1;

      return [...stack, lastAdded * digit];
    }
    case "/": {
      const lastAdded: number = stack.pop() || 1;

      return [...stack, lastAdded ? lastAdded / digit : digit];
    }
    default: {
      return stack;
    }
  }
}

export default function evaluateExpression(
  expression: string,
  stack: number[] = [],
  operator: string = "+",
  index: number = 0
): number {
  const currentChar = expression[0];

  if (expression.length === 0) {
    return stack.reduce((acc, curr) => acc + curr, 0);
  }

  if (currentChar === "(") {
    const closingIndex = findClosingParenthesis(expression.substring(index));
    const innerExpression = expression.substring(1, closingIndex);
    const evaluatedInnerExpression = evaluateExpression(
      innerExpression,
      [],
      "+",
      index
    );
    const newStack = operate(stack, operator, evaluatedInnerExpression);

    return evaluateExpression(
      expression.substring(closingIndex + 1),
      newStack,
      operator,
      index
    );
  }

  if (/\+|\-|\*|\//.test(currentChar)) {
    return evaluateExpression(
      expression.substring(1),
      stack,
      currentChar,
      index
    );
  }

  const [concatenatedNumber, numberOfDigits] = concatNumber(
    expression.substring(1),
    currentChar
  );

  const newStack = operate(stack, operator, concatenatedNumber);

  return evaluateExpression(
    expression.substring(numberOfDigits),
    newStack,
    operator,
    index
  );
}


