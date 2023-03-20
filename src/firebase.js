import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCCVgrMO089JFdaOCypgtdZvanQ5Fosmok",
  authDomain: "fer201-cef24.firebaseapp.com",
  projectId: "fer201-cef24",
  storageBucket: "fer201-cef24.appspot.com",
  messagingSenderId: "306946104122",
  appId: "1:306946104122:web:547d6771d6393574a84e03",
  measurementId: "G-MYRD2Y387Z",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();