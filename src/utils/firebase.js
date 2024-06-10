// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF7nFC7qdj5Usngj8cDcYQ3e7JG0G-SRs",
  authDomain: "rsvp-c11d8.firebaseapp.com",
  projectId: "rsvp-c11d8",
  storageBucket: "rsvp-c11d8.appspot.com",
  messagingSenderId: "609480640963",
  appId: "1:609480640963:web:bf80b9dabb688db5c41576",
  measurementId: "G-0ZLQXW1TZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);