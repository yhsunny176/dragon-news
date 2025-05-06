// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdlT_7tYXOe-fzy9DKGhM44S4yAIyM0sk",
  authDomain: "dragon-news-3ee62.firebaseapp.com",
  projectId: "dragon-news-3ee62",
  storageBucket: "dragon-news-3ee62.firebasestorage.app",
  messagingSenderId: "1092692774709",
  appId: "1:1092692774709:web:3eadeb1a5138af7fda067c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app