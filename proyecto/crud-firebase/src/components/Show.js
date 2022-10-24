import React, {useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'
//sirve para cuando se cree la funcion de eliminar
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { async } from '@firebase/util'
const MySwal = withReactContent(Swal)

const Show = () => {
    //  1. primero se configura los Hooks "ganchos"
    const [usuarios, setUsuarios] = useState( [] )//devuelve un valor conectado con usuarios y una funcion para actualizarla que seria el setUsuarios
    // 2. se referencia la db de firebase
    const usuarioCollection = collection(db, "usuario")
    // 3. se crea funcion para mostrar todos los Docs 
    const getUsuarios = async () => {
       const data = await getDocs(usuarioCollection)
       console.log(data.docs)//aca ya muestra el id de firebase "ya conecto!"

       setUsuarios(
        data.docs.map( (doc) => ( {...doc.data(), id:doc.id}))//muetra los datos o los obtiene
       )
        console.log(usuarios)
    }
    // 4. funcion para eliminar
    const deleteUsuarios = async (id) => {
       const usuariosDoc =  doc(db, 'usuario', id)
       await deleteDoc(usuariosDoc)
       getUsuarios()
    }
    // 5. funcion para confirmar las alertas por swet alert 
    const confirmDelete = (id) => {
        MySwal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                // si confirmamos, llamamos la funcion co el id, de lo contrario nosabra que eliminar
              deleteUsuarios(id)  
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'                                
              )
            }
          })
    }
    // 6.
    useEffect( () => {
        getUsuarios()
    }, [] )
    // 7. funcion para mostrar la vista de los componentes
    //-la option de borrar ya esta funcional es una operacion directa de firebase 
    //
    return (
        <>
        <div className="container-show">
            
            <button className='boton-crud' onClick={ () => {alert("Alerta!!")} }><h1>CRUD</h1></button>

            <div className="row">
                <div className="col">
                    <div className="p-3 mb-2 bg-secondary text-white">
                        <Link to="/Create" className='btn btn-secundary mt-2 mb-2'><h4 className='letra-create'>Create here!</h4></Link>
                    </div>

                    <table className='table table-dark table-hover'>
                        <thead>
                            <tr>
                                <th>nombre</th>
                                <th>cedula</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            { usuarios.map( (usuario) => (
                                <tr key={usuario.id}>
                                    <td>{usuario.nombre}</td>
                                    <td>{usuario.cedula}</td>
                                    <td>
                                        <Link to={'/edit/$usuario.id'} className="btn btn-light"><i className="fa-solid fa-pen"></i></Link>
                                        <button onClick={ () => {confirmDelete(usuario.id)} } className="btn btn-danger"><i className="fa-solid fa-eraser"></i></button>
                                    </td>
                                </tr>
                            )) }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        </>
    )
}

export default Show
