import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
    apiKey: "AIzaSyDNaGClpDiSOzjzj7wSP4PW4FA0t_Rnrms",
    authDomain: "minerva-coderhouse.firebaseapp.com",
    projectId: "minerva-coderhouse",
    storageBucket: "minerva-coderhouse.appspot.com",
    messagingSenderId: "386815084783",
    appId: "1:386815084783:web:3b3fb12dd108982873731a"
})

export const getFirebase= () => {
    return app;
    
}

export const getFirestore = () => {
    return firebase.firestore(app)
}