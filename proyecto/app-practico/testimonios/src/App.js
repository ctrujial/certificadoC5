import './App.css';
import Testimonio from './components/Testimonios';
import Persona from './components/Persona';

function App() {
  return (
    <div className="App" >
      <div>

        <div className='contenedor-principal'>
          <h1>Esto es lo que dicen los super!</h1>
        </div>

        <Persona/>

      </div>
    </div>
  );
}

export default App;
