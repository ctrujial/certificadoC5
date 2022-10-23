import React, { useState } from 'react'// le agregamos los hoots useState
import { useNavigate } from 'react-router-dom'//para enrutar
import { collection, addDoc } from 'firebase/firestore'// para trabajar con firebase
import { db } from '../firebaseConfig/firebase'

const Create = () => {

  // 1. configurar los hoots 
  const [ nombre, setNombre ] = useState('')//se inicia en '' por ser string
  const [ cedula, setCedula ] = useState(0)
  const navigate = useNavigate()

  const usuarioCollection = collection(db, 'usuario')

  const store = async (e) => {
    e.preventDefault()
    await addDoc( usuarioCollection, { nombre: nombre, cedula: cedula } )
    navigate('/')//aca nos lleva a la rura raiz = show
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
