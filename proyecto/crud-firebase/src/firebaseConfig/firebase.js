// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjxI-vPhDllj8A5u4wbnAsmpPiMi51aPU",
  authDomain: "proyectoconreact-9a46a.firebaseapp.com",
  projectId: "proyectoconreact-9a46a",
  storageBucket: "proyectoconreact-9a46a.appspot.com",
  messagingSenderId: "762419559362",
  appId: "1:762419559362:web:27d710e1594871e202345b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//conexion a la base de datos de firebase

export const db = getFirestore(app)