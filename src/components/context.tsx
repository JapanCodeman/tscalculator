import React, { createContext, useState } from 'react';

export type CalculatorOutput = {
  output: number,
  operator: string
}

type CalculatorOutputType = {
  output: CalculatorOutput | null,
  setOutput: React.Dispatch<React.SetStateAction<CalculatorOutput | null>>
}

type CalculatorContextProviderProps = {
  children: React.ReactNode
}

export const OutputContext = createContext<CalculatorOutputType | null>(null);

export const CalculatorContextProvider = ({ children }: CalculatorContextProviderProps) => {
  const [output, setOutput] = useState<CalculatorOutput | null>(null)
  return ( 
    <OutputContext.Provider value={{ output, setOutput}}>
      {children}
    </OutputContext.Provider>
  )
}