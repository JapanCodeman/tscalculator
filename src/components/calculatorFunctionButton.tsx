import { MouseEvent, useContext } from "react"
import { CalculatorContext } from "./context"

interface CalculatorFunctionButtonProps {
  name: string,
  operator: string
}

const CalculatorFunctionButton: React.FC<CalculatorFunctionButtonProps> = ({ name, operator }) => {

  const { displayValue, setDisplayValue } = useContext(CalculatorContext)

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (setDisplayValue !== undefined) {
      if (e.currentTarget.value === 'C') {
        setDisplayValue(0)
      } else {
        console.warn("setDisplayValue is undefined")
      }
    }
  };

  return (
    <div className='calculator-function-button'>
      <button className='calculator-function-button__operator' onClick={handleMouseEvent} name={name} value={operator}>{operator}</button>
    </div>
  )
}
export default CalculatorFunctionButton;