import { useState } from 'react';
import { Form, Button, Container, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import fireApp from '../firebase-config/Firebase'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { async } from '@firebase/util';


const auth = getAuth(fireApp)

function Loguin() {

    const [ registrandose, setRegistrandose ] = useState(false);

   async function tomandoValores(e) {
    e.preventDefault();
    const correo = e.target.formBasicEmail.value;
    const Contrasena = e.target.formBasicPassword.value

    if (registrandose){
        const usuarios = await createUserWithEmailAndPassword(auth, correo, Contrasena)
    } else {
        signInWithEmailAndPassword(auth, correo, Contrasena)
    }
   }

   //----------------------------------------------------------------

   


  return (
    <Container>
        <Stack gab={3}>

            <h1>{registrandose ? "Registrate!" : "Inicia Sesion!"}</h1>

        <Form onSubmit={tomandoValores}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electronico</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        
        <Button  variant="primary" type="submit">
            {registrandose ? "Registrate" : "Inicia Sesion"}
        </Button>
       

        <Button  className='boton-inicia-sesion' variant="primary" onClick={() => setRegistrandose(!registrandose)}>
                {registrandose ? "¿ ya tienes una cuenta ?" : "Inicia Sesion"}
        </Button>

        </Form>
        </Stack>
    </Container>
  )
}

export default Loguin;
