import { MouseEvent, useContext } from 'react';
import { CalculatorContext } from './context';

interface CalculatorButtonProps {
  name: string,
  value: string | number,
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({name, value}) => {
  
  const { setDisplayValue } = useContext(CalculatorContext)

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (setDisplayValue !== undefined)
    setDisplayValue(Number(e.currentTarget.value))
  };

  return (
    <div className='calculator-button'>
      <button className='calculator-button__value' onClick={handleMouseEvent} name={name} value={value}>{value}</button>
    </div>
  )
}
export default CalculatorButton;