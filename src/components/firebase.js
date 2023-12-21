// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGuF_SXeGI5w-f2ztvKLZsn3YpqKlzAv0",
  authDomain: "clone-3bd16.firebaseapp.com",
  projectId: "clone-3bd16",
  storageBucket: "clone-3bd16.appspot.com",
  messagingSenderId: "497669772559",
  appId: "1:497669772559:web:cbf42c188af05730605a7a",
  measurementId: "G-HX2LGC5YM8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)

export { auth };