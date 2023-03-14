import evaluateExpression from "@main/evaluate-expression";
import errorBoundary from "@utils/error-boundary";
import getValidExpression from "@utils/get-valid-expression";

describe("Expression Calculator", () => {
  describe("errorBoundary()", () => {
    it("Should catch error if any", () => {
      const TEST_ERROR_MESSAGE = "TEST_ERROR_MESSAGE";
      const TEST_DATA = "TEST_DATA";
      const throwError = jest.fn(() => {
        throw new Error(TEST_ERROR_MESSAGE);
      });
      const getData = jest.fn(() => TEST_DATA);

      const catchedErrorResult = errorBoundary(() => throwError());
      const receivedDataResult = errorBoundary(() => getData());

      expect(catchedErrorResult.data).toBeNull();
      expect(catchedErrorResult.error).toBeInstanceOf(Error);
      expect(catchedErrorResult.error?.message).toBe(TEST_ERROR_MESSAGE);
      expect(receivedDataResult.data).toBe(TEST_DATA);
      expect(receivedDataResult.error).toBeNull();
    });
  });

  describe("getValidExpression()", () => {
    it("Should throw correct error if any", () => {
      const NOT_PROVIDED_INPUT_ERROR = "Please provide an input!";

      expect(() => {
        getValidExpression("");
      }).toThrow(NOT_PROVIDED_INPUT_ERROR);

      const INVALID_INPUT_ERROR = "Invalid input!";

      const invalidInput1 = "2+abc";
      const invalidInput2 = "1+asd";
      const invalidInput3 = "4/(5-)";
      const invalidInput4 = "2**3";
      const invalidInput5 = "(2+3)+*4";
      const invalidInput6 = "(2+3)*/4";
      const invalidInput7 = "()";

      expect(() => {
        getValidExpression(invalidInput1);
      }).toThrow(INVALID_INPUT_ERROR);
      expect(() => {
        getValidExpression(invalidInput2);
      }).toThrow(INVALID_INPUT_ERROR);
      expect(() => {
        const result = getValidExpression(invalidInput3);

        console.log({ result });
      }).toThrow(INVALID_INPUT_ERROR);
      expect(() => {
        getValidExpression(invalidInput4);
      }).toThrow(INVALID_INPUT_ERROR);
      expect(() => {
        getValidExpression(invalidInput5);
      }).toThrow(INVALID_INPUT_ERROR);
      expect(() => {
        getValidExpression(invalidInput6);
      }).toThrow(INVALID_INPUT_ERROR);
      expect(() => {
        getValidExpression(invalidInput7);
      }).toThrow(INVALID_INPUT_ERROR);

      const PARENTHESES_ERROR =
        "The provided input contains a different number of parentheses!";

      const differentParenthesesInput1 = "(2+3)*4)-5)/(((6+7)-8)*9)))";
      const differentParenthesesInput2 = "((((2+3)*((4-5)/((6+7)-8))";
      const differentParenthesesInput3 = "(2+3)))*(4-5)/((6+7)-8)";
      const differentParenthesesInput4 = "(2*3)+4)-(5/6))/((7+8)-9)))";
      const differentParenthesesInput5 = "(((23)(4/5))+((6-7)+8)/9";
      const differentParenthesesInput6 = "((((2/3))-4)+5)*((6+7)-8)*9)";
      const differentParenthesesInput7 = "(2/3)+(45)-6)+(7-8)+9)))";
      const differentParenthesesInput8 = "((((2*3)+(4/5))-((6-7))*8)/9";
      const differentParenthesesInput9 = "((((2+3)*(4-5)/6)/((7-8)+9)";
      const differentParenthesesInput10 = "((2/3)*(4+5))+((6-7)/8)))*9";

      expect(() => {
        getValidExpression(differentParenthesesInput1);
      }).toThrow(PARENTHESES_ERROR);
      expect(() => {
        getValidExpression(differentParenthesesInput2);
      }).toThrow(PARENTHESES_ERROR);
      expect(() => {
        getValidExpression(differentParenthesesInput3);
      }).toThrow(PARENTHESES_ERROR);
      expect(() => {
        getValidExpression(differentParenthesesInput4);
      }).toThrow(PARENTHESES_ERROR);
      expect(() => {
        getValidExpression(differentParenthesesInput5);
      }).toThrow(PARENTHESES_ERROR);
      expect(() => {
        getValidExpression(differentParenthesesInput6);
      }).toThrow(PARENTHESES_ERROR);
      expect(() => {
        getValidExpression(differentParenthesesInput7);
      }).toThrow(PARENTHESES_ERROR);
      expect(() => {
        getValidExpression(differentParenthesesInput8);
      }).toThrow(PARENTHESES_ERROR);
      expect(() => {
        getValidExpression(differentParenthesesInput9);
      }).toThrow(PARENTHESES_ERROR);
      expect(() => {
        getValidExpression(differentParenthesesInput10);
      }).toThrow(PARENTHESES_ERROR);

      expect(getValidExpression("1+2")).toBe("1+2");
    });
  });

  describe("evaluateExpression()", () => {
    it("Should return correct value", () => {
      const input1 = "2+3";
      const expectedOutput1 = 5;

      const input2 = "4-7";
      const expectedOutput2 = -3;

      const input3 = "6*8";
      const expectedOutput3 = 48;

      const input4 = "9/3";
      const expectedOutput4 = 3;

      const input5 = "(2+3)*4";
      const expectedOutput5 = 20;

      const input6 = "2+3*4";
      const expectedOutput6 = 14;

      const input7 = "12/(4-2)";
      const expectedOutput7 = 6;

      const input8 = "5*((6-3)/2)";
      const expectedOutput8 = 7.5;

      const input9 = "2+3+4";
      const expectedOutput9 = 9;

      const input10 = "2*3*4";
      const expectedOutput10 = 24;

      const input11 = "2+3-4";
      const expectedOutput11 = 1;

      const input12 = "4/2*6";
      const expectedOutput12 = 12;

      const input13 = "(2+3)*(4-1)";
      const expectedOutput13 = 15;

      const input14 = "2+3*(4-1)/2";
      const expectedOutput14 = 6.5;

      const input15 = "((2+3)*4)/(5-1)";
      const expectedOutput15 = 5;

      const computedResult1 = evaluateExpression(input1);
      const computedResult2 = evaluateExpression(input2);
      const computedResult3 = evaluateExpression(input3);
      const computedResult4 = evaluateExpression(input4);
      const computedResult5 = evaluateExpression(input5);
      const computedResult6 = evaluateExpression(input6);
      const computedResult7 = evaluateExpression(input7);
      const computedResult8 = evaluateExpression(input8);
      const computedResult9 = evaluateExpression(input9);
      const computedResult10 = evaluateExpression(input10);
      const computedResult11 = evaluateExpression(input11);
      const computedResult12 = evaluateExpression(input12);
      const computedResult13 = evaluateExpression(input13);
      const computedResult14 = evaluateExpression(input14);
      const computedResult15 = evaluateExpression(input15);

      expect(computedResult1).toBe(expectedOutput1);
      expect(computedResult2).toBe(expectedOutput2);
      expect(computedResult3).toBe(expectedOutput3);
      expect(computedResult4).toBe(expectedOutput4);
      expect(computedResult5).toBe(expectedOutput5);
      expect(computedResult6).toBe(expectedOutput6);
      expect(computedResult7).toBe(expectedOutput7);
      expect(computedResult8).toBe(expectedOutput8);
      expect(computedResult9).toBe(expectedOutput9);
      expect(computedResult10).toBe(expectedOutput10);
      expect(computedResult11).toBe(expectedOutput11);
      expect(computedResult12).toBe(expectedOutput12);
      expect(computedResult13).toBe(expectedOutput13);
      expect(computedResult14).toBe(expectedOutput14);
      expect(computedResult15).toBe(expectedOutput15);
    });
  });
});
