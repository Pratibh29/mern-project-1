// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXe4_D-XMeJ4AR3X_jjZYmWYJyDtckM2g",
  authDomain: "realtor-mern.firebaseapp.com",
  projectId: "realtor-mern",
  storageBucket: "realtor-mern.appspot.com",
  messagingSenderId: "1000459885149",
  appId: "1:1000459885149:web:ea8b418b6778f239858bb4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);