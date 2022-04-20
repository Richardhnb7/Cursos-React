import React, { useState } from "react";
import TareaFormulario from "./TareaFormulario";
import '../hojas-de-estilo/ListaDeTareas.css';
import Tarea from "./Tarea";

function ListaDeTareas() {
  const [tareas,setTareas] = useState([]);//para que tareas sea iniciamente un arreglo vacio
  

  const agregarTarea = tarea => {
      /*Si queremos agregr una tarea recibimos esa tarea como argumento,
        Si la tarea no esta vacia cuando le quitamoos los espacios delante o detras
          el array tendra esa tarea y todas las tareas anteriores  */
    if (tarea.texto.trim()) {
      tarea.texto=tarea.texto.trim();
      const tareasActualizadas= [tarea, ...tareas];//
        /*Para agregar la tarea al principio del array y se muestre la primera
            convierte las tares de un array a tareas independientes, o objetos
            individuales*/
      setTareas(tareasActualizadas)
        //tomar las tareas anteriores y agregarlas al estado
    }
  }
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id );
    //el que cumpla esta condicion se array al arreglo, si es igual no se agrega al array
    setTareas(tareasActualizadas)
  }

  const completarTarea = id => {
    //vamos a tomar una tarea para realizar algon con esta y verificar si la tarea esta completa
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        //estoma es propiedad si el valor es verdaero con este operador es falso o viceversa y se reasigna
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  } 


  return(  
      /*Un contenedor solo puede tener un contenedor principal no incorporar nuevos contenedores 
          sin un proposito, usamos etiquetas vacias denominados fragmentos */
    <>
      <TareaFormulario onSubmit={agregarTarea}/>
        {/*se pasa un propt y entre las llaves pasamos esa funcion, cuando se envia el fomulario
            vamos a llamar a esa funcion agregar tarea, se usara en tarea formulario y se va a enviar 
            la tarea nueva
          Agregamos la tarea con esa funcion*/}

        {/*Lista de componentes, para renderizar una lista de componentes de tareas, abrimos llaves y 
            tomamos el arreglotares y luego llamamos a map que va a toamr cada una de eas tareas las 
            pasa una por una como el argumento para otra funcion y va a realizar lo que nosotros especifiquemos 
            con esa tarea se toma esa informacion de esas tareas y cada tarea se va a representar como un 
            objeto en el array
          Cada una de esas tareas va a tener untexto especifico que para representarla vamos a usar un
            objeto (un arreglo de objetos), cada objetos va a definir la informacion de dicha tarea*/}
      <div className="tarea-lista-contenedor">
        {
          tareas.map((tarea)=>
            <Tarea
              key={tarea.id}
              id={tarea.id}//aqui lo pasamos doble para poder luego pasarlo a los click
              texto={tarea.texto}
              completada={tarea.completada}
              eliminarTarea={eliminarTarea} 
              completarTarea={completarTarea}/>
          )
        }
      </div>
    </>
  );
}
export default ListaDeTareas;