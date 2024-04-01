import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "conture-media.firebaseapp.com",
  projectId: "conture-media",
  storageBucket: "conture-media.appspot.com",
  messagingSenderId: "390050606194",
  appId: "1:390050606194:web:a804fc37304d4386b3a6eb",
};

export const app = initializeApp(firebaseConfig);
