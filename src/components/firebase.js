// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from 'firebase/auth'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
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
const app =firebase.initializeApp(firebaseConfig);
const auth=firebase.auth()
const db=app.firestore()

export { auth,db };