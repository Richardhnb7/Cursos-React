
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png'
import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';//libreria de funciones matematicas


function App() {
  //creamos un estado de los  componentes 
  //y una funcion para cambiar el imput
  const[input, setInput] = useState('');

  const agregarInput = val =>{
    // va a actualizar el imput, pasandole los nuevos valores
    //aqui seria una concatenacion 
    setInput(input +val);
  };
  const calcularResultado = () => {
    if (input) {
      //esto esta importado de un paquete
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };


  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>

        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='logo' />
      </div>
      <div className='contenedor-calculadora'>
        {/* aqui le asigna son dos cosas diferentes uno es el nombre de la 
        proiedad y el otro es el valor que le pasamos/valro actual
         que se reemplazara por pantalla*/}
        <Pantalla input={input}/>
        <div className='fila'>
          {/* con esto todos los botones tienen acceso a la funcion
          y al pulsarlo se ejecuta la funcin */}
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
      
    </div>
  );
}

export default App;
