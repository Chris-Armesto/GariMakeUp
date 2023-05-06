import firebase from "firebase";
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaPSdS0Z4PFuyaGbWqK5-Z7e8_CV0Osuk",
  authDomain: "gari-makeup-e-commerce.firebaseapp.com",
  projectId: "gari-makeup-e-commerce",
  storageBucket: "gari-makeup-e-commerce.appspot.com",
  messagingSenderId: "1034870009402",
  appId: "1:1034870009402:web:e9eadc286ceb5a743d0f03"
};

// Initialize 
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore =() =>{
    return firebase.firestore(app)
}