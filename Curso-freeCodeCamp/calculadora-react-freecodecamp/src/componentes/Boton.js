import React from 'react';
import '../hoja-de-estilos/Boton.css';

function Boton(props) {

//funcion que se pasa en el div
  const esOperador = valor =>{
    //se sumplen estas condiciones retornamos el valor verdadero y si uno 
    //es falso retornaremos falso
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };
// si el resultado retornado por la operacion/funcion ternaria es verdadero se reemplazara 
// toda la expresion se reeemplazara por operador, si es falso retornara null y no hara ningun cambion en las clases 
  
return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      
      onClick={() => props.manejarClic(props.children)}>
      {/* cuando le pulsa te pasa el valor dentro del boton 
      cuando courra un clic llamaramemos a una funciion nueva que estamos 
      creando que es anonima que no toma nuingun parametro y retorna el resultado
      de llamar a esa funcion.
      de esta forma estamos escribiendo una funcion una funcion  que llama a otra*/}

      {props.children}
    </div>
  );
  //props.children : los descendientes del props para poder usarlos
  //trimEnd remueve espoacios al final de la cadena de caracteres llmar al metodo despues de cerrar la plantilla literal 

}

export default Boton;