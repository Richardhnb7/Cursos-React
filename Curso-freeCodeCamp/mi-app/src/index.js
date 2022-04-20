import React from 'react';//crear componentes
import ReactDOM from 'react-dom';//interactua con la estructura de nuestra aplicacion, en el navegador
import './index.css';
import App from './App';//importar la aplicacion principal, importamos nuestro componente principal
import reportWebVitals from './reportWebVitals';


//creamos el compoente de la aplicacion en modo estricto viene por defecto 
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
//se especifica el elemnto y el contenedor(root esta dentro de index.html)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
