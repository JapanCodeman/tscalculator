interface CalculatorScreenProps {
  display: number
}

function CalculatorScreen({display}: CalculatorScreenProps) {

  return (
    <div className='calculator-screen'>
      <p className='calculator-screen__output'>{display}</p>
    </div>
  )
}
export default CalculatorScreen;