import React from 'react'
import '../hojas-estilo/BotonClear.css'

function BotonClear(props) {
  return (
    <div className='botonClear' 

    onClick={props.manejarClic} >
      {props.children}
    </div>
  );
};

export default BotonClear;
