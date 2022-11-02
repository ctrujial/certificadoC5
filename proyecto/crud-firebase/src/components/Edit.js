import { useEffect, useState } from "react"//hoots
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

import { collection, addDoc } from "firebase/firestore"
import { async } from "@firebase/util"

const Edit = () => {

  const [ usuario, setUsuario ] = useState("");// hoost
  const [ cedula, setCedula ] = useState()
  const navigate = useNavigate();

  const {id} = useParams()// devuelve el valir del id

  const obtenerDatosDb =  collection(db, "usuario")

  const actualizar = async (e) => {
    e.preventDefault() // evita comportamiento por predefecto
    const usuarios =  doc(db, "usuario", id) // esto trae todos los datos
    const datosCapturadosParaActualizar = { usuario: usuario, cedula: cedula }
    await updateDoc(usuarios, datosCapturadosParaActualizar) // updateDoc es de firestore // aca los actualiza
    navigate("/") // aca nos devuelve a la rais = show
  }

  const datosUsuariosSeleccionados = async (id) => {
    const usuarios = await getDoc(doc(db, "usuario", id))// doc siempre lleva la conexion el db y el id
    if (usuarios.exists()){
        console.log(usuarios)
    } else {

    }
  }

  useEffect ( () => {
    datosUsuariosSeleccionados(id)
    
  }, [])

  return (
    <div>editar</div>
  )
}

export default Edit