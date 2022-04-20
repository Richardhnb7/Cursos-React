import React from 'react';
import '../hoja-de-estilo/testimonio.css';


//para incluir propiedades y utilizarla, sirve para recibir valores 
function Testimonio(props) {
  return(
    //estructura de nuestros componentes 
    <div className='contenedor-testimonio'>
      <img 
        className='imagen-testimonio'
        src={require(`../imagenes/testimonio-${props.imagen}.png`)}//direccion de la imagen
        alt='Foto de Emma' />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <strong>{props.nombre}</strong> en <strong>{props.pais}</strong>
            </p>
          <p className='cargo-testimonio'>
          {props.cargo} en   <strong>{props.empresa}</strong></p>
          <p className='texto-testimonio'>"{props.testimonio}"</p>
        </div>
    </div>
  );
} 

// estamos exportando testimonio, sino se pone no saldara el componente 
// esta sera la exportacion por defecto de este archivo
// hay  dos tipos la nombrada y por defecto 
// el pordefecto permite decir que este es el unico componente  que se va a exportar de este archivo 
// nombrada si podemos ecpotar varios elemntos de un mismo archivo y especificar el elemento 

export default Testimonio;