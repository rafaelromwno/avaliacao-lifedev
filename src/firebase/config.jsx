import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBkh6Ju-OFVM2r0PjKkGSKk7_c-UzkP4sQ",
  authDomain: "avaliacaodw-rafaelromwno-9a249.firebaseapp.com",
  projectId: "avaliacaodw-rafaelromwno-9a249",
  storageBucket: "avaliacaodw-rafaelromwno-9a249.firebasestorage.app",
  messagingSenderId: "504770414132",
  appId: "1:504770414132:web:36d86b7ed31e3b4c79ac61",
  measurementId: "G-51765ZMX7G"
};

const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }