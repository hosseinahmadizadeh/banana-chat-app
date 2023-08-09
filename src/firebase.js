import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhyYlnMUnw7m3-GTS3rI7TDFYMYkryC2g",
  authDomain: "chat-2128b.firebaseapp.com",
  projectId: "chat-2128b",
  storageBucket: "chat-2128b.appspot.com",
  messagingSenderId: "952030248386",
  appId: "1:952030248386:web:f80c87f61e70017b9cea5b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
