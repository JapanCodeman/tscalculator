import { MouseEvent } from 'react';

interface CalculatorButtonProps {
  name: string,
  value: number | '.'
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({name, value}) => {

  const handleMouseEvent = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(e.currentTarget.value)
  };

  return (
    <div className='calculator-button'>
      <button className='calculator-button__value' onClick={handleMouseEvent} name={name} value={value}>{value}</button>
    </div>
  )
}
export default CalculatorButton;