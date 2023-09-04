import { MouseEvent } from "react"

interface CalculatorFunctionButtonProps {
  name: string,
  operator: string
}

const CalculatorFunctionButton: React.FC<CalculatorFunctionButtonProps> = ({ name, operator }) => {

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.value)
  };

  return (
    <div className='calculator-function-button'>
      <button className='calculator-function-button__operator' onClick={handleMouseEvent} name={name} value={operator}>{operator}</button>
    </div>
  )
}
export default CalculatorFunctionButton;