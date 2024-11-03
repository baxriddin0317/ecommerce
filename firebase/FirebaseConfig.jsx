// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7hEmfREjZbznFaPGz1-2v3dDmwGxYPTc",
  authDomain: "ecommerce-195aa.firebaseapp.com",
  projectId: "ecommerce-195aa",
  storageBucket: "ecommerce-195aa.appspot.com",
  messagingSenderId: "1051253166285",
  appId: "1:1051253166285:web:49d3cad42b82172ff39984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)
const fireStorage = getStorage(app);

export { fireDB, auth, fireStorage }