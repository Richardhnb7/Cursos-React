import React from 'react';
import '../hoja-de-estilos/Pantalla.css';

//en vez de poner una funcion pondriamos una funcion flecha 

//input valor que ingreso el usuario
const  Pantalla = ({ input })=>(
  <div className='input'>
    {input}
  </div>
);

export default Pantalla;