import evaluateExpression from "@main/evaluate-expression";
import errorBoundary from "@utils/error-boundary";
import getValidExpression from "@utils/get-valid-expression";

const button = document.querySelector("button") as HTMLButtonElement;

export default function calculateExpression() {
  const resultParagraph = document.querySelector<HTMLParagraphElement>(
    ".calculator__result"
  );
  const input = document.querySelector<HTMLInputElement>("input");

  // Handle not found elements
  if (!resultParagraph || !input) {
    return;
  }

  const escapedSpacesExpression = input.value.replace(/\s/g, "");
  const { data: validExpression, error } = errorBoundary(() =>
    getValidExpression(escapedSpacesExpression)
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
