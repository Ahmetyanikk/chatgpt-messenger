import { getApp,getApps,initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2KaECZRP0fmmsoYW-nNPZbn5o_GRzjaw",
  authDomain: "chatgpt-messenger-c3b54.firebaseapp.com",
  projectId: "chatgpt-messenger-c3b54",
  storageBucket: "chatgpt-messenger-c3b54.appspot.com",
  messagingSenderId: "58436294282",
  appId: "1:58436294282:web:9d0abf3625f911a2f2bf73"
};

// Initialize Firebase
const app = getApps.length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export{db};