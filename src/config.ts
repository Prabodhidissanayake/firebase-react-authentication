// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkKjD0xAZ0cPGrfpaQh78fJmApv6C8FZY",
  authDomain: "fir-react-authentication-c2241.firebaseapp.com",
  projectId: "fir-react-authentication-c2241",
  storageBucket: "fir-react-authentication-c2241.appspot.com",
  messagingSenderId: "951835120171",
  appId: "1:951835120171:web:e24da6145be28804a3106e",
  measurementId: "G-B8Y1TM4YFS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);