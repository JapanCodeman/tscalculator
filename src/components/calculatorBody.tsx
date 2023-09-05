import { useState } from "react";

import CalculatorButton from "./calculatorButton";
import CalculatorFunctionButton from "./calculatorFunctionButton";
import CalculatorScreen from "./calculatorScreen";

function CalculatorBody() {
  // Change this to a useContext
  const [displayValue, setDisplayValue] = useState(0)

  return (
    <div className='calculator-body'>
        <CalculatorScreen display={displayValue}/>

      <div className='calculator-body__button-wrapper'>
        
        <CalculatorFunctionButton name={'C'} operator={'C'} />
        <CalculatorFunctionButton name={'+/-'} operator={'+/-'} />
        <CalculatorFunctionButton name={'%'} operator={'%'} />

        <CalculatorFunctionButton name={'/'} operator={'/'} />
        <CalculatorFunctionButton name={'*'} operator={'*'} />
        <CalculatorFunctionButton name={'-'} operator={'-'} />
        <CalculatorFunctionButton name={'+'} operator={'+'} />
        <CalculatorFunctionButton name={'='} operator={'='} />

        <CalculatorButton handleSetDisplayValue={setDisplayValue} name={'8'} value={8} />
        <CalculatorButton handleSetDisplayValue={setDisplayValue} name={'7'} value={7} />
        <CalculatorButton handleSetDisplayValue={setDisplayValue} name={'9'} value={9} />
        <CalculatorButton handleSetDisplayValue={setDisplayValue} name={'4'} value={4} />
        <CalculatorButton handleSetDisplayValue={setDisplayValue} name={'5'} value={5} />
        <CalculatorButton handleSetDisplayValue={setDisplayValue} name={'6'} value={6} />
        <CalculatorButton handleSetDisplayValue={setDisplayValue} name={'1'} value={1} />
        <CalculatorButton handleSetDisplayValue={setDisplayValue} name={'2'} value={2} />
        <CalculatorButton handleSetDisplayValue={setDisplayValue} name={'3'} value={3} />
        <CalculatorButton handleSetDisplayValue={setDisplayValue} name={'0'} value={0} />
        {/* <CalculatorButton name={'.'} value={'.'} /> */}
    </div>
  </div>
  )
}
export default CalculatorBody;