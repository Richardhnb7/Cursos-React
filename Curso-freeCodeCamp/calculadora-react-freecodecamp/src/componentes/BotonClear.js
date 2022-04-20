import React from 'react';
import '../hoja-de-estilos/BotonClear.css';

//componente funcional con una funcion flecha

const BotonClear = (props) => (
  // aqui asignamos esa funcion para que se ejecute cuando se produzca el click
  <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;