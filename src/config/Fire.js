import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDKFVY0dWYJJhehW8wHtqJS_WQgzVgFqQs",
    authDomain: "dailykhalis-47348.firebaseapp.com",
    databaseURL: "https://dailykhalis-47348.firebaseio.com",
    projectId: "dailykhalis-47348",
    storageBucket: "dailykhalis-47348.appspot.com",
    messagingSenderId: "661281077055"
  };
const fire=firebase.initializeApp(config);
export default fire;
