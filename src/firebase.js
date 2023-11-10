// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUMUkHr1ZVFfZxKtJ0adaJdiSHxwPasns",
  authDomain: "self-driving-car-6c9b4.firebaseapp.com",
  projectId: "self-driving-car-6c9b4",
  storageBucket: "self-driving-car-6c9b4.appspot.com",
  messagingSenderId: "47978094212",
  appId: "1:47978094212:web:669029a100761ac7592cd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);