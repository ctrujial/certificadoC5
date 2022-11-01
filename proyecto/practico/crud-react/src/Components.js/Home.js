import React from 'react'
import { Button } from 'react-bootstrap'
import firebase from '../firebase-config/Firebase'
import { signOut, getAuth} from 'firebase/auth'

const auth = getAuth(firebase)

function Home() {
  return (
    <Button onClick={() => signOut(auth)} >
        Cerrar Sesion
    </Button>
  )
}

export default Home
