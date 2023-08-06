import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWdjUXbGaIhJDnAkrI5wfSQ1CfrvkXXjg",
  authDomain: "squash-chat-4b8d8.firebaseapp.com",
  projectId: "squash-chat-4b8d8",
  storageBucket: "squash-chat-4b8d8.appspot.com",
  messagingSenderId: "603509039047",
  appId: "1:603509039047:web:db3299ed65e7855cd083e2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
