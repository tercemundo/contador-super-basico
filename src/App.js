import logo from './logo.svg';
import './style.css';
import React, { useState } from 'react';


function App() {
const [valor, setValor] = useState(0);

function handleClick(e) {
setValor(valor + 1);
console.log(valor);
}
  return (
    <div>
      <h2>Contador: {valor}</h2>
      <button onClick={ handleClick }>+1</button>
    </div>
  );
}
export default App;

