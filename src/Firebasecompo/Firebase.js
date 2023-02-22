// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6hs1pXT6APhNQT36yE7HGJ9t-wtoY24I",
  authDomain: "ema-john-auth-b5b57.firebaseapp.com",
  projectId: "ema-john-auth-b5b57",
  storageBucket: "ema-john-auth-b5b57.appspot.com",
  messagingSenderId: "429866093619",
  appId: "1:429866093619:web:c563181ef98c8e3259e746",
  measurementId: "G-WG6EMJ1Z3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;