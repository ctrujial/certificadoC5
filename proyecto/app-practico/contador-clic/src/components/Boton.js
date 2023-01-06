import "../styles/Boton.css"

function Boton({texto, botonClic, manejarClic}) {
    return(
      <button className={ botonClic ? "boton-clic": "boton-reinicio" }onClick={manejarClic}>
        {texto}
      </button>
    );
} 

export default Boton;