// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxlCVIzGaMIMi-KeRcMPvhV5zk73mBliw",
  authDomain: "react-fb-auth-e24d7.firebaseapp.com",
  projectId: "react-fb-auth-e24d7",
  storageBucket: "react-fb-auth-e24d7.appspot.com",
  messagingSenderId: "336190826529",
  appId: "1:336190826529:web:45823af6fc8deab3dd5b60",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);