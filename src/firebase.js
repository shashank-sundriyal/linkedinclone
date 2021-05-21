import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBvVuI_hdnOn7VeuTJ6iKyzgCBsjuxD8Lg",
    authDomain: "linkedin-clone-f22b5.firebaseapp.com",
    projectId: "linkedin-clone-f22b5",
    storageBucket: "linkedin-clone-f22b5.appspot.com",
    messagingSenderId: "726242958761",
    appId: "1:726242958761:web:0d417128c89ba00ef7b8b8",
    measurementId: "G-KBWGYPS2N2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };