import { useEffect, useState } from "react"//hoots
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

const Edit = () => {
  return (
    <div>
      <h1>Aca podemos editar!</h1>
    </div>
  )
}

export default Edit
