import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA8ZIY8N2tf1RZyFkcgfjO4Jhfk_6dNf6I",
  authDomain: "twitter-clone-2895b.firebaseapp.com",
  projectId: "twitter-clone-2895b",
  storageBucket: "twitter-clone-2895b.appspot.com",
  messagingSenderId: "458255335641",
  appId: "1:458255335641:web:a128bf6709d6b0dba17ec8",
  measurementId: "G-7Y9PQL885G"
};
  
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
