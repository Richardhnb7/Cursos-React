import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
import { v4 as uuidv4 } from 'uuid';
//sirve para generar identificadores unicos

function TareaFormulario(props) {
  const [input, setInput] = useState('');
  //cuando el usuario este escribiendo vamos a cambiar el estado de este formulsrio
  const manejarCambio = e => {
    setInput(e.target.value)//esto nos estrtael el valor del campo de texto que ingrao el usuario
  }
/*esta funcion se  va a llmar cuando se trete de enviar el fomulario es decir en el boton
  se va a recibir como argumento un evento que se va amandarautomaticamente cuando ocurra ese 
  envio, esto nos va a permitir evitar que la pagina se vuelva a cargar cuando se envie el 
  formulario */
  const manejarEnvio = e => {
    e.preventDefault();
    //para que no se vuelva a cargar toda la applicacion cuando enviamos el formulario
    const tareaNueva = {
      id:uuidv4(),/*aqui asignamos los identificadores unicos */
      texto: input,
      completada: false
    }
    props.onSubmit(tareaNueva);
    //cuando se envie el formulario se pasara eso por argumento
  }
  
  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input
      // campo de ingreso del texto
        className='tarea-input'
        type='text'
        placeholder='Escribe una tarea'
        name='texto'
      /*
        cuando ocurre un cambio en el fomulario, es decir un evento,
        se llama la funcion manejar cambio 
      */
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar tarea
      </button>
    </form> 
  );
}
export default TareaFormulario;