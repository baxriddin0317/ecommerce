// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDe6nDyfrrz2P-fWNjUcGHT7uaB-4HRvR0",
  authDomain: "kursiyuz.firebaseapp.com",
  projectId: "kursiyuz",
  storageBucket: "kursiyuz.firebasestorage.app",
  messagingSenderId: "1042093100953",
  appId: "1:1042093100953:web:9a1f521371082b59740d08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)
const fireStorage = getStorage(app);

export { fireDB, auth, fireStorage }