import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAvf3ieRBQiNpchovtaxyueDIW1zu8Y3cs",
    authDomain: "react-loginregis.firebaseapp.com",
    projectId: "react-loginregis",
    storageBucket: "react-loginregis.appspot.com",
    messagingSenderId: "963756600111",
    appId: "1:963756600111:web:865bd67045ac97032f0fda"
  };

const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;

