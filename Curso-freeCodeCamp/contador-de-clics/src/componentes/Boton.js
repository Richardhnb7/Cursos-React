import React from 'react';
import '../hojas-de-estilo/boton.css'

function Boton({ texto, esBotonDeClic, manejarClic }) {
  /*aqui le pasaos un operador ternario el cual si es verdaero 
  le pasamos el primero pero si es el otro cojera el otro valor
  majenejarClic proviene del componente que cree al boton o lorederice

  */
  return(
    <button
    className={ esBotonDeClic ? 'boton-clic' : 'boton-reiniciar' }
    onClick={manejarClic}>
      {texto}
    </button>
  )
}
export default Boton;