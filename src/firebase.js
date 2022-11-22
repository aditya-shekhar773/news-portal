import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';
import { getStorage } from "firebase/storage";

import 'firebase/compat/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwlIgKzyvQK3b_NCfBU-_mer1mjw4YBLI",
  authDomain: "news-portal-582b4.firebaseapp.com",
  projectId: "news-portal-582b4",
  storageBucket: "news-portal-582b4.appspot.com",
  messagingSenderId: "500982867836",
  appId: "1:500982867836:web:21b51604d2c999562aa6f9",
  measurementId: "G-20ZSE0ET04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export const storage = getStorage(app);
export {db,app};