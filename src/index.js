import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App.js";
import "./index.css"
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyD7W5dvRZcpo3rH2zucF3J_H7FLKxHesiE",
  authDomain: "tienda-nauticamartin.firebaseapp.com",
  projectId: "tienda-nauticamartin",
  storageBucket: "tienda-nauticamartin.appspot.com",
  messagingSenderId: "322253423612",
  appId: "1:322253423612:web:704ea78ef9d08a5aec2879"
};
initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);