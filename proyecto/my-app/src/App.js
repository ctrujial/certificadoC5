import React from 'react';
import logo from './logo.svg';
import './App.css';
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';
import Componente3 from './components/Componente3';
import Propiedades from './components/Propiedades';

function App() {
  let nombre = 'ctrujial';
  let estaciones = ['Primavera', 'Verano','Otoño','Invierno'];
  return (
    <div className="App">
      <section>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <label htmlFor = 'nombre'>Ingresa tu nombre</label>
          <input type='text' id='nombre'/>
          <h1>{nombre}</h1>
          <p>{3+1}</p>
          <p>
            Editar <code>src/App.js</code> desde app.js
          </p>
          <ul>
            {estaciones.map ((el, index) => (
              <li key={index}>{el}</li>
            ))}
          </ul>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          <section>
            <Componente3/>
          </section>

        </header>
      </section>
      <section>
        <Componente1/>
      </section>
      <section>
        <Componente2 creandoAtributo = "hola soy un componente funcional desde una props"/>
      </section>
      <section>
        <Propiedades
        cadena="una cadena"
        unObjeto = {{nombre:'Cristian', correo: 'correo@gmail.com'}}
        arreglo = {[1,2,3]}
        function = {(numero) => numero*numero}
        />
      </section>
    </div>
  );
} 

export default App;
 