// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvsZIw9sI7bxNWPISQP_symeeomQhh4ig",
  authDomain: "by-mabe.firebaseapp.com",
  projectId: "by-mabe",
  storageBucket: "by-mabe.appspot.com",
  messagingSenderId: "667752892125",
  appId: "1:667752892125:web:d79e5f4025ba88bcbbbd34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =getFirestore(app)