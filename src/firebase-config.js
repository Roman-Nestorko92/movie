import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAe0WyfnFO0SRDPvL6R2IukhkYI3meM3SA",
  authDomain: "my-movie-a59ec.firebaseapp.com",
  projectId: "my-movie-a59ec",
  storageBucket: "my-movie-a59ec.appspot.com",
  messagingSenderId: "418831453893",
  appId: "1:418831453893:web:cbf6c5d7b2823bcb6baaac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
