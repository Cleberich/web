import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAF83FEXt1ek1qjSBZgtQEr_WSn4Pn6WLw",
  authDomain: "paito-601ff.firebaseapp.com",
  projectId: "paito-601ff",
  storageBucket: "paito-601ff.appspot.com",
  messagingSenderId: "739439353671",
  appId: "1:739439353671:web:8fe8e7fb1a30930118f662",
  measurementId: "G-EG7L8GJJ23",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
