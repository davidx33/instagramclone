// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
//  the firebase backend setup
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7k8wf5PUL81JWTmn8MP4xEmOS1fDdMZU",
  authDomain: "david-xus-instagram.firebaseapp.com",
  projectId: "david-xus-instagram",
  storageBucket: "david-xus-instagram.appspot.com",
  messagingSenderId: "454707363412",
  appId: "1:454707363412:web:c42a61310516b5a99937c1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };