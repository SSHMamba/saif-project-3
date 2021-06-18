// firebase.js
import firebase from "firebase/app";
import "firebase/database";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC2RQDP0nc5yH3tauNyn8NHq4BO1-yxHAI",
  authDomain: "saif-project-3.firebaseapp.com",
  projectId: "saif-project-3",
  storageBucket: "saif-project-3.appspot.com",
  messagingSenderId: "685481924109",
  appId: "1:685481924109:web:680f77205b6296aeac2744",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// this exports the CONFIGURED version of firebase
export default firebase;
