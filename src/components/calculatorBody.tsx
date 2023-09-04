import CalculatorButton from "./calculatorButton";
import CalculatorFunctionButton from "./calculatorFunctionButton";
import CalculatorScreen from "./calculatorScreen";

function CalculatorBody() {

  return (
    <div className='calculator-body'>
      <CalculatorScreen />

      <div className='calculator-body__button-wrapper'>
        
        <CalculatorFunctionButton name={'C'} operator={'C'} />
        <CalculatorFunctionButton name={'+/-'} operator={'+/-'} />
        <CalculatorFunctionButton name={'%'} operator={'%'} />

        <CalculatorFunctionButton name={'/'} operator={'/'} />
        <CalculatorFunctionButton name={'*'} operator={'*'} />
        <CalculatorFunctionButton name={'-'} operator={'-'} />
        <CalculatorFunctionButton name={'+'} operator={'+'} />
        <CalculatorFunctionButton name={'='} operator={'='} />

        <CalculatorButton name={'7'} value={7} />
        <CalculatorButton name={'8'} value={8} />
        <CalculatorButton name={'9'} value={9} />
        <CalculatorButton name={'4'} value={4} />
        <CalculatorButton name={'5'} value={5} />
        <CalculatorButton name={'6'} value={6} />
        <CalculatorButton name={'1'} value={1} />
        <CalculatorButton name={'2'} value={2} />
        <CalculatorButton name={'3'} value={3} />
        <CalculatorButton name={'0'} value={0} />
        <CalculatorButton name={'.'} value={'.'} />
    </div>
  </div>
  )
}
export default CalculatorBody;