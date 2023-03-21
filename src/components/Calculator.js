const Buttons = () => (
  <div className="buttons">
    <button type="button" className="clac-btn btn-ac special">AC</button>
    <button type="button" className="clac-btn btn-+/- special">+/-</button>
    <button type="button" className="clac-btn btn-% special">%</button>
    <button type="button" className="clac-btn btn-/ operation">/</button>
    <button type="button" className="clac-btn btn-7 numbers">7</button>
    <button type="button" className="clac-btn btn-8 numbers">8</button>
    <button type="button" className="clac-btn btn-9 numbers">9</button>
    <button type="button" className="clac-btn btn-* operation">*</button>
    <button type="button" className="clac-btn btn-4 numbers">4</button>
    <button type="button" className="clac-btn btn-5 numbers">5</button>
    <button type="button" className="clac-btn btn-6 numbers">6</button>
    <button type="button" className="clac-btn btn-- operation">-</button>
    <button type="button" className="clac-btn btn-1 numbers">1</button>
    <button type="button" className="clac-btn btn-2 numbers">2</button>
    <button type="button" className="clac-btn btn-3 numbers">3</button>
    <button type="button" className="clac-btn btn-+ operation">+</button>
    <button type="button" className="clac-btn btn-0 numbers">0</button>
    <button type="button" className="clac-btn btn-. numbers">.</button>
    <button type="button" className="clac-btn btn-= operation">=</button>
  </div>
);

const Calculator = () => (
  <div className="calculator">
    <div className="screen">0</div>
    <Buttons />
  </div>
);

