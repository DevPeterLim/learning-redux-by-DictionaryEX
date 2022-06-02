// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa6LF56zuTg2w1AMLWt_3_nFRk17aI7cg",
  authDomain: "hh99dictionary.firebaseapp.com",
  projectId: "hh99dictionary",
  storageBucket: "hh99dictionary.appspot.com",
  messagingSenderId: "908730056739",
  appId: "1:908730056739:web:e8db932127d7e650ecf196",
  measurementId: "G-SFCTKZ5JTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);