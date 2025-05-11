// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBY1zm5FxGinSawtPc1_7TGxwbxlqH8RGE",
  authDomain: "netflixgpt-f87a6.firebaseapp.com",
  projectId: "netflixgpt-f87a6",
  storageBucket: "netflixgpt-f87a6.firebasestorage.app",
  messagingSenderId: "822864087987",
  appId: "1:822864087987:web:90d282a23b5a5526aed9c6",
  measurementId: "G-Q928KZY0DP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line 
const analytics = getAnalytics(app);

export const auth = getAuth();
