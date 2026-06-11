// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCumUK7on7EJwHB4ChJvoEpnyIiC8EAiz8",
  authDomain: "fir-figter-64e74.firebaseapp.com",
  projectId: "fir-figter-64e74",
  storageBucket: "fir-figter-64e74.firebasestorage.app",
  messagingSenderId: "384041397959",
  appId: "1:384041397959:web:e15ef652a1a763f43f98e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);