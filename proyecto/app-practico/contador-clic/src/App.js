
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import logo from './img/logo3.jpg'
import { useState } from 'react';


function App() {

  const [numeroClic, setNumeroClic] = useState(0);

  const manejarClic = () =>{
    setNumeroClic(numeroClic + 1);
  };

  const reiniciarContador = () =>{
    setNumeroClic(0);
  };

  return (
    <div className="App">
      <div className='logo'>
        <img
        className='logo-ensayo'
        src={logo}
        alt = 'un logo' />
      </div>

      <div className='contador-app'>
        <Contador 
        numeroClic={numeroClic} />
      </div>

      <div className='contenedor-contador'>
        <Boton
         texto='Clic'
         botonClic={true}
         manejarClic={manejarClic} />
        <Boton
         texto='Reiniciar'
         botonClic={false}
         manejarClic={reiniciarContador} />
      </div>
      
    </div>
  );
}

export default App;
