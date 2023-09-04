export interface CalculatorContextTypes {
  num1: number,
  num2?: number,
  operator?: string,
  result?: number,
  operation: (num1, num2) => number
}