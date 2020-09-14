import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsUe4MPQbcBxZPujsMBCfbiYt4qmTQlgQ",
    authDomain: "clone-e6bb5.firebaseapp.com",
    databaseURL: "https://clone-e6bb5.firebaseio.com",
    projectId: "clone-e6bb5",
    storageBucket: "clone-e6bb5.appspot.com",
    messagingSenderId: "971235413771",
    appId: "1:971235413771:web:a4f10903ffa5d14efbdc0e",
    measurementId: "G-WJ6LYZZBMB"
  };

  // const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };