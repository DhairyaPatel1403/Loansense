// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import 'firebase/compat/database';
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu8IrqNcayVg9fPTJjaKtNxbKfiM49MJo",
  authDomain: "loansense-72d26.firebaseapp.com",
  projectId: "loansense-72d26",
  storageBucket: "loansense-72d26.appspot.com",
  messagingSenderId: "295012113180",
  appId: "1:295012113180:web:cfb1ec6c453cd32d5ff8d9"
};

// Initialize Firebase

export default firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);


export const auth = firebase.auth();

export const storage = getStorage();

export const db = getFirestore(app);