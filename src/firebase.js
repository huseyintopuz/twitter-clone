import firebase from "firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAjGbYtsKtvC-LTdP3GgQHTM70zjTSqNMM",
  authDomain: "twitter-clone-ht-640a3.firebaseapp.com",
  projectId: "twitter-clone-ht-640a3",
  storageBucket: "twitter-clone-ht-640a3.appspot.com",
  messagingSenderId: "616285135644",
  appId: "1:616285135644:web:aa4d8c1eb47d79ba2e90d9",
  measurementId: "G-66CZQPVYSY"
};
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

  const db = firebase.firestore();
  export default db;
