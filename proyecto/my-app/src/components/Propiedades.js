import React from "react";

export default function Propiedades(props){
    return(
        <div >
            <h5>{props.porDefecto}</h5>
        <ul>
            <ol ><a className="a" href="https://edube.org/learn/programming-essentials-in-python-part-1-spanish/como-las-funciones-se-comunican-con-su-entorno-4" target="_blank">aqui</a></ol>
            <li>{props.cadena}</li>
            <li>{props.booleano ? 'verdadero': 'falso'}</li>
            <li>{props.arreglo.join(', ')}</li>
        </ul>
        </div>
    );
}

Propiedades.defaultProps = {
    porDefecto: 'quemando el valor'
}