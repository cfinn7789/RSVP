// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF7nFC7qdj5Usngj8cDcYQ3e7JG0G-SRs",
  authDomain: "rsvp-c11d8.firebaseapp.com",
  projectId: "rsvp-c11d8",
  storageBucket: "rsvp-c11d8.appspot.com",
  messagingSenderId: "609480640963",
  appId: "1:609480640963:web:49b95c71d7fc8eb9c41576",
  measurementId: "G-X5XD2GF938"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app , auth };