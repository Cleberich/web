import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB2P3RYSPjA-50LrwE03bWKaB22nLWxF2k",
  authDomain: "actituddigital-c6d30.firebaseapp.com",
  projectId: "actituddigital-c6d30",
  storageBucket: "actituddigital-c6d30.appspot.com",
  messagingSenderId: "97964957776",
  appId: "1:97964957776:web:d5b105a89c02658d767155",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
