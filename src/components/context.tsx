import React, { useState } from "react";

import { CalculatorContextTypes } from "../@types/calculator";

export const CalculatorContext = React.createContext<CalculatorContextTypes | null>(null)

interface inputTypes {
  num1?: number | null,
  num2?: number | null,
  operator: string | null,
  output: number | null
}

export const CalculatorProvider = ({ children }: React.PropsWithChildren) => {
  const [inputs, setInputs] = useState<inputTypes | null>({
    num1: null,
    num2: null,
    operator: null,
    output: null
  })

  const setNum1 = (num1: number) => {
    setInputs({
      num1: num1,
      num2: null,
      operator: null,
      output: null
    })
  }

  const setNum2 = (num2: number) => {
    setInputs({
      num1: null,
      num2: num2,
      operator: null,
      output: null
    })
  }

  const setOperator = (operator: string) => {
    setInputs({
      num1: null,
      num2: null,
      operator: operator,
      output: null
    })
  }

  const addition = (num1: number, num2: number) => {
    const result = num1 + num2
    setInputs({
      num1: null,
      num2: null,
      operator: null,
      output: result
    })
  }

  const subtraction = (num1: number, num2: number) => {
    const result = num1 - num2
    setInputs({
      num1: null,
      num2: null,
      operator: null,
      output: result
    })
  }

  const multiplication = (num1: number, num2: number) => {
    const result = num1 * num2
    setInputs({
      num1: null,
      num2: null,
      operator: null,
      output: result
    })
  }

  const division = (num1: number, num2: number) => {
    const result = num1/num2
    setInputs({
      num1: null,
      num2: null,
      operator: null,
      output: result
    })
  }
}