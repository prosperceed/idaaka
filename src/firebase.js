import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDJtDvEbo3j8A28iDMk5KjaeJKlUHRE-LQ",
    authDomain: "idaaka-caee0.firebaseapp.com",
    projectId: "idaaka-caee0",
    storageBucket: "idaaka-caee0.appspot.com",
    messagingSenderId: "576338558596",
    appId: "1:576338558596:web:1b00f37921edf8e7e4ccd1",
  })
  .auth();
