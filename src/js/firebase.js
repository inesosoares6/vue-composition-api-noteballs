import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSIqfOaGCYdRIpAYIp9yLIFHDnFN_36LY",
  authDomain: "noteballs-9c02a.firebaseapp.com",
  projectId: "noteballs-9c02a",
  storageBucket: "noteballs-9c02a.appspot.com",
  messagingSenderId: "373014711752",
  appId: "1:373014711752:web:0015769a26f3961cce84fd",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {
  db,
  auth
}