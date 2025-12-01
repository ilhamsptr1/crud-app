// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDuEBOLvpzMh0oXmBSwiDFWIOd9YH94hgU",
  authDomain: "ujianpweb.firebaseapp.com",
  projectId: "ujianpweb",
  storageBucket: "ujianpweb.firebasestorage.app",
  messagingSenderId: "253135244998",
  appId: "1:253135244998:web:5fc2d9a17fbab6e329d1c7",
  measurementId: "G-2BFQ7Q3DB0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { app, analytics, db };