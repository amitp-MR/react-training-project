import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAJ0Yg3QDn9-T0fY7aJWxnkyQa93YZUw2k",
    authDomain: "react-training-project-c91aa.firebaseapp.com",
    databaseURL: "https://react-training-project-c91aa.firebaseio.com",
    projectId: "react-training-project-c91aa",
    storageBucket: "react-training-project-c91aa.appspot.com",
    messagingSenderId: "1076758315820",
    appId: "1:1076758315820:web:e6eb32fc357b419c896289",
    measurementId: "G-FYC08F51VG"
  };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();


export default firebase;