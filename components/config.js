import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB6XfBjmvoipyXWZQJ5PtTt3hbDiGxTHdY",
    authDomain: "marking-b80da.firebaseapp.com",
    databaseURL: "https://marking-b80da-default-rtdb.firebaseio.com",
    projectId: "marking-b80da",
    storageBucket: "marking-b80da.appspot.com",
    messagingSenderId: "154988724674",
    appId: "1:154988724674:web:a3d5b993531e535b8bd65b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database();

  