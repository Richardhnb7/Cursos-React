/*
archivo que crea un componente un componente funcional 
el componente principal de la aplicacion que va a contener 
toda la estructura de nuestra aplicacion


*/

import logo from './logo.svg';//impoertando el logo
import './App.css';//importaar el css de estilo

function App() {//definir el componente app
  return (//retornar la estructura de la aplicacion que usa jsx
    <div className="App">todo lo de adentro se suele 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
