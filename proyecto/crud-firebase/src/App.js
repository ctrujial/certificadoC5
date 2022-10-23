import './App.css';
// 1. importar componentes show, edit, create
import Show from './components/Show';
import Edit from './components/Edit';
import Create from './components/Create';

// importar para enrutar
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Show/> } ></Route>
        <Route path='/create' element={ <Create/> } ></Route>
        <Route path='/edit/:id' element={ <Edit/> } ></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
