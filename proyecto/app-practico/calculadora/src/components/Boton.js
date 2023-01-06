import React from "react";
import '../hojas-estilo/Boton.css'

function Boton(props){
  //isNaN(caracter) = si no es un numero
  //si no es un numero, ni un punto, ni es igual es falso su return
  const esOpeador = valor => {
      return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };
  //.trimEnd() = elimina espacios al final
  return(

      <div className={`boton-contenedor ${esOpeador(props.children) ? 'operador' : ''}`.trimEnd()}>
          {props.children} 
      </div>
  )
}

export default Boton;

//props.children = todo lo que este dentro de la etiqueta boton eje: <Boton>1</Boton>, el 1 es el children