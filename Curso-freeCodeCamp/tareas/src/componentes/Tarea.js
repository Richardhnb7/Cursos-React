import React from 'react';
import '../hojas-de-estilo/Tarea.css'//tener en cuenta los niveles de las carpetas
import { AiOutlineCloseCircle } from "react-icons/ai";//para poder importar iconos

function Tarea({id, texto, completada, completarTarea, eliminarTarea}) {
//   vamos a tomar los props con la sintaxis de destructutacion
    return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
    {/* // si el valor de ese propt completada es v  se le asigna el primero si es f el otro valor */}
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono' />
        {/* estos son componentes de react asi que se definen como tal en 
        nuestra aplicacion */}
      </div>
    </div>
  );    
}

export default Tarea;