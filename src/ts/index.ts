
const TEST_INPUT = "(1 + 2) * 4 / 6 ";

// const p = document.getElementById("test") as HTMLParagraphElement;
const input = document.querySelector("input") as HTMLInputElement;
const button = document.querySelector("button") as HTMLButtonElement;

input.value = TEST_INPUT;

function solve(inputValue: string) {
  console.log(inputValue);

  return 0;
}

button.addEventListener("click", (_event) => {
  const result: number = solve(input.value);
  console.log(result);
});
