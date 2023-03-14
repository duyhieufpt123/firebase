import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyC6Gq2EzKbeI4DQFau6dlJkUrgFh68ew1M",
    authDomain: "lab7-367904.firebaseapp.com",
    projectId: "lab7-367904",
    storageBucket: "lab7-367904.appspot.com",
    messagingSenderId: "730437167398",
    appId: "1:730437167398:web:dfdd83588c45295fbaf9e7",
    measurementId: "G-LHG411F6FL"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();