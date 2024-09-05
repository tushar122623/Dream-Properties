// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "xyz-of-property.firebaseapp.com",
  projectId: "xyz-of-property",
  storageBucket: "xyz-of-property.appspot.com",
  messagingSenderId: "833861138278",
  appId: "1:833861138278:web:51d866077f182cb9d9baa7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);