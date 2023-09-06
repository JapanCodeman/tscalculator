import { createContext } from "react";

import { CalculatorContextTypes } from "../@types/calculator";

export const CalculatorContext = createContext<CalculatorContextTypes>({ displayValue: 0 })