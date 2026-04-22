// config/firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDoY8AhRqmdnlemXlPqibIjX6BjJ9BkVqY",
  authDomain: "webora-website.firebaseapp.com",
  projectId: "webora-website",
  storageBucket: "webora-website.firebasestorage.app",
  messagingSenderId: "209677125058",
  appId: "1:209677125058:web:56038a5872a88fd056825b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore database
export const db = getFirestore(app);