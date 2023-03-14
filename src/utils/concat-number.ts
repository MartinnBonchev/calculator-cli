export default function concatNumber(
    str: string,
    strNumber: string = "",
    numberOfDigits: number = 1
  ): [concatenatedNumber: number, numberOfDigits: number] {
    const char = str[0];
    if (/\d/g.test(char)) {
      return concatNumber(str.substring(1), strNumber + char, numberOfDigits + 1);
    }
  
    return [Number(strNumber), numberOfDigits];
  }