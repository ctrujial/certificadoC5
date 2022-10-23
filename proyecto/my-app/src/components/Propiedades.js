<<<<<<< HEAD
import React, {Component} from "react";

const Propiedades=(props)=>{
    return <div>
            <h6>{props.cadena}</h6>
            <h6>{props.unObjeto.nombre + ":  "+ props.unObjeto.correo}</h6>
            <h6>{props.arreglo.join(', ')}</h6>
            <h6>{props.arreglo.map(props.function).join('-')}</h6>
        </div>
};


export default Propiedades;
=======
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
>>>>>>> f6dfb1ae14b0a5897d1c1be8ddabb03bd3c01546
