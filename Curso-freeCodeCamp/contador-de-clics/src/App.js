
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import { useState } from 'react';//para la interactividad



function App() {

  const [numClics, setNumclics] = useState(0);//valor inical del numero de clicks

  //funcion flecha
  const manejarClic = () =>{
    setNumclics(numClics + 1);//introducimos  la actualizacino del numerod e clicks
    
  };

  const reiniciarContador= ()=>{
    setNumclics(0);
  };

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>s
        
        <Boton
          texto='Clic'
          esBotonDeClic={true} 
          manejarClic={manejarClic}/>
          
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false} 
          manejarClic={reiniciarContador}/>
      </div>
    </div>
    /*en manejar clic que seria el props le asignamos
    un funcion que le pasara los parametros
    */
  );
}

export default App;
