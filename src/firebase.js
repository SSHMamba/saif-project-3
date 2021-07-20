import firebase from "firebase/app";
import 'firebase/database';


  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtrWYDAg1Ud1FYwtxpFsCetzgNHF-B7Jc",
    authDomain: "watchit-af533.firebaseapp.com",
    projectId: "watchit-af533",
    storageBucket: "watchit-af533.appspot.com",
    messagingSenderId: "45916954000",
    appId: "1:45916954000:web:7c4be302190272947e6715"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;