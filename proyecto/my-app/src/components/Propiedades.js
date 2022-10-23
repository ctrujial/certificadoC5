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