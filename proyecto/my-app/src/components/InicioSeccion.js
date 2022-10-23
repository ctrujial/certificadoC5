import React, {Component} from "react";

class InicioSeccion extends Component {
    render() {
        return <div className="inicioSeccion">
            <h2>Inicio de Seccion</h2>

            <h3>Usuario</h3>
            <label htmlFor = 'usuario'>Ingresa tu usuario</label>
            <input type='text' id='usuario'/>
            
            <h3>Passward</h3>
            <label htmlFor = 'passward'>Ingresa tu contraseña</label>
            <input type='text' id='passward'/>
        </div>
    }
}

export default InicioSeccion; 