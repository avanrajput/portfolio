// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUvqDYH06swjE4R0BhIaMZwgaeJHk0f44",
  authDomain: "portfolio-980bc.firebaseapp.com",
  projectId: "portfolio-980bc",
  storageBucket: "portfolio-980bc.appspot.com",
  messagingSenderId: "715807105092",
  appId: "1:715807105092:web:e3464c848b4ab2f22f9c11",
  measurementId: "G-1X32PJ35QW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
