import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCfOBG0ADC2U9k8Lo-Atyh3emLO-x8liIc",
    authDomain: "fir-react-72fbc.firebaseapp.com",
    projectId: "fir-react-72fbc",
    storageBucket: "fir-react-72fbc.appspot.com",
    messagingSenderId: "515707791868",
    appId: "1:515707791868:web:ee82d6b0de2fbd1b7dea79"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export const db = firebase.firestore();


