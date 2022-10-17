import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import InicioSeccion from './components/InicioSeccion'
import Flooter from './components/Flooter';

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

    </div>
  );
} 

export default App;
 