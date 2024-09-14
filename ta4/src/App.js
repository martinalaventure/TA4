import './App.css';
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Has dado {contador} clicks</p>
      <button onClick={() => setContador(contador + 1)}>
        incrementar el contador
      </button>
      <br></br>
      <button onClick={() => {
        if (contador > 0) {
          setContador(contador - 1);
        }
      }}>
        decrementar el contador
      </button>
      <br></br>
      <button onClick={() => setContador(0)}>
        resetear el contador
      </button>
    </div>
  );
}

export default Contador;
