// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdiIjn9JAx1SpREOVFL5oVpNadamhC3W8",
  authDomain: "fir-42bfc.firebaseapp.com",
  projectId: "fir-42bfc",
  storageBucket: "fir-42bfc.appspot.com",
  messagingSenderId: "33324633877",
  appId: "1:33324633877:web:fcee8c4949123498b4231c"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export { auth };