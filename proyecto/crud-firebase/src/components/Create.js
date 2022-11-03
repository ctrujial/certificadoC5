import React, { useState } from 'react'// le agregamos los hoots useState
import { useNavigate } from 'react-router-dom'//para enrutar
import { collection, addDoc } from 'firebase/firestore'// para trabajar con firebase
import { db } from '../firebaseConfig/firebase'
// le agregue sweetalert2 para ponerle un mensaje de confirmacion
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Create = () => {

  // 1. configurar los hoots 
  const [ nombre, setNombre ] = useState('')//se inicia en '' por ser string
  const [ cedula, setCedula ] = useState()
  const navigate = useNavigate()

  const usuarioCollection = collection(db, 'usuario')

  //console.log(usuarioCollection)

  const confirmstore = () => {// aca creo el mensase en una funcion flecha
    MySwal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your work has been saved',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const store = async (e) => {
    e.preventDefault()
    await addDoc( usuarioCollection, { nombre: nombre, cedula: cedula } )
    confirmstore()// se invoca el mensaje de confirmacion
    navigate('/')//aca nos lleva a la rura raiz = show
    //console.log(e.target[1].value) muestra el nombre
    //console.log(e.target[1].value) muestra la cedula
  }

  return (
    <>
    <div className='container-create'>
      <div className='row'>
        <div className='col'> 
          <h1>Create</h1>

          <form onSubmit={store}>

            <div className='mb-3'>
              <label className='form-label'>Nombre</label>
              <input
                value={nombre}
                onChange={ (e)=>setNombre(e.target.value) }
                type="text"
                className='form-control'
              />
            </div>

            <div className='mb-3'>
              <label className='form-label'>Cedula</label>
              <input
                value={cedula}
                onChange={ (e)=>setCedula(e.target.value) }
                type="text"
                className='form-control'
              />
            </div>
            <button type='submit' className="btn btn-primary">Store</button>

          </form>

        </div>
      </div>
    </div>
    </>
  )
}

export default Create
