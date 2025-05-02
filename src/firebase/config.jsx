import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBbjdxxWeovZDGwi2KEbsv_MB6hWaAbB-M",
  authDomain: "avaliacaodw-rafaelromwno.firebaseapp.com",
  projectId: "avaliacaodw-rafaelromwno",
  storageBucket: "avaliacaodw-rafaelromwno.firebasestorage.app",
  messagingSenderId: "883267616356",
  appId: "1:883267616356:web:1d4e30fa329eb338cb2971",
  measurementId: "G-XW1EL41G4K"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }