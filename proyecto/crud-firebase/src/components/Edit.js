import { useEffect, useState } from "react"//hoots
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

const Edit = () => {

  const [ nombre, setNombre ] = useState("");// hoost
  const [ cedula, setCedula ] = useState()
  const navigate = useNavigate();

  const {id} = useParams()// devuelve el valir del id 

  const update = async (e) => {
    e.preventDefault() // evita comportamiento por predefecto
    const usuarios =  doc(db, 'usuario', id) // esto trae todos los datos
    const datosCapturadosParaActualizar = { nombre: nombre, cedula: cedula }
    await updateDoc(usuarios, datosCapturadosParaActualizar) // updateDoc es de firestore // aca los actualiza
    navigate("/") // aca nos devuelve a la rais = show
  }

  const datosUsuariosSeleccionados = async (id) => {
    const usuarios = await getDoc( doc(db, 'usuario', id) )// doc siempre lleva la conexion el db y el id
    if (usuarios.exists()){
        console.log(usuarios.datosCapturadosParaActualizar())
        setNombre(usuarios.datosCapturadosParaActualizar().nombre)
        setCedula(usuarios.datosCapturadosParaActualizar().cedula)
    } else {
      
    }
  }

 useEffect ( () => {
    datosUsuariosSeleccionados(id)
    
  }, [])

  return (
    <div className='container-create'>
      <div className='row'>
        <div className='col'> 
          <h1>Edit</h1>

          <form onSubmit={update}>

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
            <button type='submit' className="btn btn-primary">Ediatr</button>

          </form>

        </div>
      </div>
    </div>
  )
}

export default Edit;