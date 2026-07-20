// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "neuroflow-ai-29699.firebaseapp.com",
  projectId: "neuroflow-ai-29699",
  storageBucket: "neuroflow-ai-29699.firebasestorage.app",
  messagingSenderId: "394414837973",
  appId: "1:394414837973:web:fa63c7da0e8bf1e8bc525c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const githubProvider = new GithubAuthProvider();
