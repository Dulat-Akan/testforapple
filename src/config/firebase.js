import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAiq-LYwk_nZXrnbi51NfKFS7RaDKDPl3k",
    authDomain: "test-fda18.firebaseapp.com",
    databaseURL: "https://test-fda18-default-rtdb.firebaseio.com",
    projectId: "test-fda18",
    storageBucket: "test-fda18.appspot.com",
    messagingSenderId: "1020081659866",
    appId: "1:1020081659866:web:c898543dc8cee581d82ae3",
    measurementId: "G-RKH3EZ7HW3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

export default firebase;
