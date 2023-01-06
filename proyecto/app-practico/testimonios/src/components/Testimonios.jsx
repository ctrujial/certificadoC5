import React from "react";
import '../styles/Testimonios.css';

function Testimonio(props){
    return(
        <div className="contenedor-testimonio">
            <img
            className="imagen-testimonio"
            src={require(`../imagenes/${props.imagen}.jpg`)}//cpmillas ivertidas para poder ingresar js en img
            alt= {props.heroe} />

            <div className="contener-texto-testimonio">
                <p className="nombre-super">
                    <strong>{props.nombre}</strong> en {props.pais}
                </p>
                <p className="cargo-super">
                    {props.cargo} en <strong>{props.equipo}</strong>
                </p>
                <p className="texto-testimonio">
                    "{props.texto}"
                </p>
            </div>

        </div>
    );
    
}

export default Testimonio;