import { useContext } from "react";
import { CalculatorContext } from "./context";

function CalculatorScreen() {

  const { displayValue } = useContext(CalculatorContext)

  return (
    <div className='calculator-screen'>
      <p className='calculator-screen__output'>{displayValue}</p>
    </div>
  )
}
export default CalculatorScreen;