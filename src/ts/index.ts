// TODO: Add aliases
import concatNumber from "../utils/concat-number";
import errorBoundary from "../utils/error-boundary";
import findClosingParenthesis from "../utils/find-closing-parentheses";
import getValidExpression from "../utils/get-valid-expression";

const button = document.querySelector("button") as HTMLButtonElement;

function operate(stack: number[], operator: string, digit: number) {
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

function evaluateExpression(
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

function calculateExpression() {
  const resultParagraph = document.querySelector<HTMLParagraphElement>(
    ".calculator__result"
  );
  const input = document.querySelector<HTMLInputElement>("input");

  // Handle not found elements
  if (!resultParagraph || !input) {
    return;
  }

  const { data: validExpression, error } = errorBoundary(() =>
    getValidExpression(input.value)
  );

  if (error) {
    resultParagraph.textContent = error;
  }

  if (validExpression) {
    const result = evaluateExpression(validExpression);
    resultParagraph.textContent = `Result: ${result}`;
  }
}

button.addEventListener("click", calculateExpression);
