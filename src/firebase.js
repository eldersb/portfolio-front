import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWcBiJaBEBFUHotAFpi-7lxwswzenW0QE",
  authDomain: "portfiloio.firebaseapp.com",
  projectId: "portfiloio",
  storageBucket: "portfiloio.firebasestorage.app",
  messagingSenderId: "440364339176",
  appId: "1:440364339176:web:cd2724d64512c6f0e8de5d"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
