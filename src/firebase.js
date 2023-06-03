// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD023VdQbG39lmDf7iVa2eXz3coZYLgTM",
  authDomain: "fitnessfocus-8d0fe.firebaseapp.com",
  projectId: "fitnessfocus-8d0fe",
  storageBucket: "fitnessfocus-8d0fe.appspot.com",
  messagingSenderId: "445715128215",
  appId: "1:445715128215:web:211d87fe4c42ded3b12ed2",
  measurementId: "G-BTMLDG8LX1" 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);