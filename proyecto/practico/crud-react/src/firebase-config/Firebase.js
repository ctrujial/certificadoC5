// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCARRbws1BEmsZxmBwGQOrua0vYEA8dp0Q",
  authDomain: "proyecto3-2a66d.firebaseapp.com",
  projectId: "proyecto3-2a66d",
  storageBucket: "proyecto3-2a66d.appspot.com",
  messagingSenderId: "505550429517",
  appId: "1:505550429517:web:11b55072edbc8194536b04"
};

// Initialize Firebase
const db = initializeApp(firebaseConfig);

export default db;