// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYEP9P5GTtbpcLtDpElKjZZ2cBZGuPW8c",
  authDomain: "petjoy-31ffe.firebaseapp.com",
  projectId: "petjoy-31ffe",
  storageBucket: "petjoy-31ffe.appspot.com",
  messagingSenderId: "729364707171",
  appId: "1:729364707171:web:a47d123d2f08661500c556",
  measurementId: "G-T6W47Z6LNN",
  databaseURL:
    "https://petjoy-31ffe-default-rtdb.asia-southeast1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const database = getDatabase(app);
const storage = getStorage(app);

export {
  firebaseConfig,
  app,
  auth,
  googleProvider,
  database,
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
};
