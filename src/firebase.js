import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBcy3oL3-XL0H68vDAGeWPg9Gi7Lip51gA",
    authDomain: "zing-8f5b3.firebaseapp.com",
    projectId: "zing-8f5b3",
    storageBucket: "zing-8f5b3.appspot.com",
    messagingSenderId: "1000793216078",
    appId: "1:1000793216078:web:bed3b9ee9e9ec129dddf1f",
    measurementId: "G-NXB68TPVL2"
};

const fire = firebase.initializeApp(firebaseConfig)

export default fire;