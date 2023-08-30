import React from "react";
import ReactDOM from "react-dom/client";

import CalculatorBody from "./components/calculatorBody";
import './styles/index.scss';

const App = () => {
  return (
    <div className='calculator'>
      <CalculatorBody />
    </div>
  )
}

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to get root element')
const root = ReactDOM.createRoot(rootElement);

root.render(
  <App />
)