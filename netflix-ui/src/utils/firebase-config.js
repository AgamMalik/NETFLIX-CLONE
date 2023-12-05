
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyDCQ4-8QE6zAwDb0-4WSUm_SRtxFhKB_RE",
  authDomain: "react-netflix-clone-78695.firebaseapp.com",
  projectId: "react-netflix-clone-78695",
  storageBucket: "react-netflix-clone-78695.appspot.com",
  messagingSenderId: "58040595922",
  appId: "1:58040595922:web:1a81601d9e2ee74f6c040b",
  measurementId: "G-Q2Z00K4229",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const firebaseAuth = getAuth(app)
