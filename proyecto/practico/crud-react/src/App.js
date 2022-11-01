import './App.css';

import { useState } from 'react';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Loguin from './Components.js/Loguin';
import Home from './Components.js/Home';

import fireApp from './firebase-config/Firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
const auth = getAuth(fireApp)

function App() {

  const [ usuarioGlobal, setUsuarioGlobal ] = useState(null)

   onAuthStateChanged(auth, (usuarioFirebase) =>{
    if(usuarioFirebase){
        setUsuarioGlobal(usuarioFirebase);
    } else{
        setUsuarioGlobal(null);
    }
   });


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ usuarioGlobal ? <Home/> : <Loguin/> } />
          <Route path="Home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
