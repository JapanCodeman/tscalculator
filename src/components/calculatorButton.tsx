import { MouseEvent } from 'react';

interface CalculatorButtonProps {
  name: string,
  value: string | number,
  handleSetDisplayValue: (e: number) => void
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({name, value, handleSetDisplayValue}) => {


  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    handleSetDisplayValue(Number(e.currentTarget.value))
  };

  return (
    <div className='calculator-button'>
      <button className='calculator-button__value' onClick={handleMouseEvent} name={name} value={value}>{value}</button>
    </div>
  )
}
export default CalculatorButton;