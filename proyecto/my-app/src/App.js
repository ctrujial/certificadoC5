import React from 'react';
import './App.css';
<<<<<<< HEAD
import Componente1 from './components/Componente1';
import Componente2 from './components/Componente2';
import Componente3 from './components/Componente3';
import Propiedades from './components/Propiedades';
=======
import Navbar from './components/Navbar';
import InicioSeccion from './components/InicioSeccion'
import Flooter from './components/Flooter';
>>>>>>> f6dfb1ae14b0a5897d1c1be8ddabb03bd3c01546

function App() {

  return (
    
    <div>

      <div className='principal'>
        <section className='navbar'>
          <Navbar/>
        </section>
        <section>
          <InicioSeccion/>
        </section>
      </div>
      
      <section>
         <Flooter/>
      </section>

<<<<<<< HEAD
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
=======
>>>>>>> f6dfb1ae14b0a5897d1c1be8ddabb03bd3c01546
    </div>
  );
} 

export default App;
 