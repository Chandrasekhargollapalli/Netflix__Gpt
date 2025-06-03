import { getAuth} from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQHow1iSG9RTKqN_MnuAB_UYGLyB7cIGA",
  authDomain: "netflixgpt-fc11f.firebaseapp.com",
  projectId: "netflixgpt-fc11f",
  storageBucket: "netflixgpt-fc11f.firebasestorage.app",
  messagingSenderId: "971042667525",
  appId: "1:971042667525:web:a7b1717296b5962eb9f06c",
  measurementId: "G-F92CTZGHXV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth()