import { useEffect, useState } from "react"//hoots
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

const Edit = () => {

  const [ nombre, setNombre ] = useState('');// hoost
  const [ cedula, setCedula ] = useState(0)
  const navigate = useNavigate();

  const {id} = useParams()// devuelve el valor del id 

  const update = async (e) => {
    e.preventDefault() // evita comportamiento por predefecto
    const usuario =  doc(db, 'usuario', id) // esto trae todos los datos
    const data = { nombre: nombre, cedula: cedula }
    await updateDoc(usuario, data) // updateDoc es de firestore // aca los actualiza
    navigate('/') // aca nos devuelve a la rais = show
  }

  const getUsuariosbyid = async (id) => {
    const usuario = await getDoc(doc(db, 'usuario', id)) // doc siempre lleva la conexion el db y el id
    const data = { nombre: nombre, cedula: cedula }
    console.log(usuario)
    if (usuario.exists()){
        console.log(usuario.data().id)
        setNombre(data)
        setCedula(usuario.data().cedula)
    } else {
      console.log('no. ', usuario.data().id, usuario.doc )
    }
  }
console.log(getUsuariosbyid)
 useEffect ( () => {
  getUsuariosbyid(id)
    
  }, [])

  return (
    <div className='container-create'>
      
    </div>
  )
}

export default Edit;