import './App.css';
import imagen from '../src/img/calculadora.png'
import Boton from './components/Boton';
import PantallaInput from './components/PantallaInput'
import BotonClear from './components/BotonClear';
import React, { useState } from 'react';
import { evaluate } from 'mathjs'//se importa e instala npm install mathjs


function App() {

  const [input, setInput] = useState('');

  const agregarInput = (valor)=>{
    setInput(input + valor);
  };

  const resultado = ()=>{
    if(!input){
      setInput(evaluate(0));
    }else{
      setInput(evaluate(input));//qe evalue lo que actualmente contienen el input
    }
  };

  const vaciarInput = () => {
    setInput('');
  }

  return (
    <div className="App">
      <div className='imagen-calculadora'>
        <img
         src={imagen}
         className='calculadora'
         alt='imagen-calculadora' />
      </div>
      <div className='contenedor-principal'>
        <PantallaInput
        input={input} />
        <div className='fila'>
          <Boton manejarClic={(valor)=> setInput(input+valor)}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
        <Boton manejarClic={resultado}>=</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
        <BotonClear manejarClic={vaciarInput}>clear</BotonClear>
        </div>
      </div>
    </div>
  );
}
//minuto 4:46
export default App;
