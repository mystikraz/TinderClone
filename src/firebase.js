import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAL1hew9BuzdjQS2Jin9DT3-THcvSE_LU8",
    authDomain: "tinder-clone-c8b15.firebaseapp.com",
    databaseURL: "https://tinder-clone-c8b15.firebaseio.com",
    projectId: "tinder-clone-c8b15",
    storageBucket: "tinder-clone-c8b15.appspot.com",
    messagingSenderId: "866322729516",
    appId: "1:866322729516:web:80eec8f30863fc09045f89",
    measurementId: "G-EY6513EMBZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebase.firestore();

export default database;
