import { MouseEvent, useContext } from 'react';
import { CalculatorContext } from './context';

interface CalculatorButtonProps {
  name: string,
  value: string | number,
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({name, value}) => {
  
  const { displayValue, setDisplayValue } = useContext(CalculatorContext)

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    let inputNumber = e.currentTarget.value;
    if (setDisplayValue !== undefined) {
      if (displayValue === 0) {
        setDisplayValue(Number(e.currentTarget.value))
      } else if (displayValue !== 0) {
        let outputValue = String(displayValue) + String(inputNumber) 
        setDisplayValue(Number(outputValue))
      }
    }
      else {
        console.warn("setDisplayValue is undefined")
      }
    }

  return (
    <div className='calculator-button'>
      <button className='calculator-button__value' onClick={handleMouseEvent} name={name} value={value}>{value}</button>
    </div>
  )
}
export default CalculatorButton;