import ReactDOM from "react-dom/client";

import CalculatorBody from "./components/calculatorBody";
import './styles/index.scss';
import { createContext, useState } from "react";

export default function App() {

  interface calculatorOutputTypes {
    output: number,
    operator?: string
  }

  const CalculatorOutput = createContext<calculatorOutputTypes | undefined>(undefined)
  const [output, setOutput] = useState(0)

  return (
    <div className='calculator'>
      <CalculatorOutput.Provider value={{output: output}}>
        <CalculatorBody />
      </CalculatorOutput.Provider>
    </div>
  )
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to get root element')
const root = ReactDOM.createRoot(rootElement);

root.render(
  <App />
)