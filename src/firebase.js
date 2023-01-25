// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNvlDpkppstIi3GuIuN81rLRgoI7TxYPU",
  authDomain: "react-real-estate-a1f94.firebaseapp.com",
  projectId: "react-real-estate-a1f94",
  storageBucket: "react-real-estate-a1f94.appspot.com",
  messagingSenderId: "224831143398",
  appId: "1:224831143398:web:c59deabb62a3b5a5e52a27"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()