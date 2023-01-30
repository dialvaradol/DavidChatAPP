// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDR0r_Ht00tyNE51TPc_Fb1WwBxJVkLZV8",
  authDomain: "appchatdavid1.firebaseapp.com",
  projectId: "appchatdavid1",
  storageBucket: "appchatdavid1.appspot.com",
  messagingSenderId: "568463368993",
  appId: "1:568463368993:web:84cc17c7be9d0e5a751460"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app);