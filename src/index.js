import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App.js";
import "./index.css"
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7W5dvRZcpo3rH2zucF3J_H7FLKxHesiE",
  authDomain: "tienda-nauticamartin.firebaseapp.com",
  projectId: "tienda-nauticamartin",
  storageBucket: "tienda-nauticamartin.appspot.com",
  messagingSenderId: "322253423612",
  appId: "1:322253423612:web:704ea78ef9d08a5aec2879"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);