import React, { useState } from 'react';
import Buttons from './CalcButtons';
// import calculate from '../logic/calculate'

const Calculator = () => {
  const [result, setResult] = useState(0);

  const getData = (data) => {
    setResult(data);
    console.log(result);
  };

    <div className="calculator">
      <div className="screen">0</div>
      <div className="buttons">
        <button onClick={btnClick} type="button" className="calc-btn btn-ac special">AC</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-+/- special">+/-</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-% special">%</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-÷ operation">÷</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-7 numbers">7</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-8 numbers">8</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-9 numbers">9</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-× operation">×</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-4 numbers">4</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-5 numbers">5</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-6 numbers">6</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-- operation">-</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-1 numbers">1</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-2 numbers">2</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-3 numbers">3</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-+ operation">+</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-0 numbers">0</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-. numbers">.</button>
        <button onClick={btnClick} type="button" className="calc-btn btn-= operation">=</button>
      </div>
    </div>;
};

export default Calculator;
