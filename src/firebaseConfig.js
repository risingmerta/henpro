// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB6guDP4jzMDLBx3WcG3x8Ht0tjO1EIMc0",
  authDomain: "idatori-dd67f.firebaseapp.com",
  projectId: "idatori-dd67f",
  storageBucket: "idatori-dd67f.appspot.com",
  messagingSenderId: "481926700896",
  appId: "1:481926700896:web:6c5c913996c4cb3abd8805",
  measurementId: "G-8CZE6KPNWW"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
