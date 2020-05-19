import firebase from 'firebase';
var firebaseConfig={
    apiKey: "AIzaSyAJ0Yg3QDn9-T0fY7aJWxnkyQa93YZUw2k",
    authDomain: "react-training-project-c91aa.firebaseapp.com",
    databaseURL: "https://react-training-project-c91aa.firebaseio.com",
    projectId: "react-training-project-c91aa",
    storageBucket: "react-training-project-c91aa.appspot.com",
    messagingSenderId: "1076758315820",
    appId: "1:1076758315820:web:e24ffed8fa78940e896289",
    measurementId: "G-RX5X1SV7YT"
};


var fire = firebase.initializeApp(firebaseConfig);

export default fire;