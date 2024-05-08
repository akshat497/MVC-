// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLB6jSm2OZ3tfsVAqHsJqY3Sias968_vk",
  authDomain: "restro-e665e.firebaseapp.com",
  databaseURL: "https://restro-e665e-default-rtdb.firebaseio.com",
  projectId: "restro-e665e",
  storageBucket: "restro-e665e.appspot.com",
  messagingSenderId: "159682658814",
  appId: "1:159682658814:web:68184b28bacb165c1440af",
  measurementId: "G-EKYZ7S5P1R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };