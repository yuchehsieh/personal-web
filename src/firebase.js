import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDAvEkLvZ-1Xxi4zly77vYyPtEZLElzyD0",
    authDomain: "personal-web-5a5e4.firebaseapp.com",
    databaseURL: "https://personal-web-5a5e4.firebaseio.com",
    projectId: "personal-web-5a5e4",
    storageBucket: "personal-web-5a5e4.appspot.com",
    messagingSenderId: "154032860057",
    appId: "1:154032860057:web:1ed650a889ea7dab4f0108",
    measurementId: "G-W8HP550MQN"
});

const db = firebaseApp.firestore();

const worksRef = db.collection('works');
const aboutRef = db.collection('about');

export { db, worksRef, aboutRef };