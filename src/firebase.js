import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3PvQN-XiP-_C0xIamRsNatD2xeFROfW8",
  authDomain: "minin-75f04.firebaseapp.com",
  databaseURL: "https://minin-75f04-default-rtdb.firebaseio.com",
  projectId: "minin-75f04",
  storageBucket: "minin-75f04.firebasestorage.app",
  messagingSenderId: "1010800682481",
  appId: "1:1010800682481:web:e2511a4f08b23d93f85050",
  measurementId: "G-9VNKZ9FTMH"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
