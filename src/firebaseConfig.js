// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD1P1ti6SFwWw4PzQ5pNnE4iK4R93NXw2U",
  authDomain: "kpkf-632c2.firebaseapp.com",
  projectId: "kpkf-632c2",
  storageBucket: "kpkf-632c2.appspot.com",
  messagingSenderId: "573351336395",
  appId: "1:573351336395:web:feff1c637a6d61774a7e4e",
  measurementId: "G-6N3BMWNFJV",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
