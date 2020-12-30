import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLeJOlmv-K9e3IqzbnhnHEL1H2Z82Nzkc",
  authDomain: "click-up-gsg.firebaseapp.com",
  projectId: "click-up-gsg",
  storageBucket: "click-up-gsg.appspot.com",
  messagingSenderId: "806416301126",
  appId: "1:806416301126:web:c8011071c458341d5b5e47",
  measurementId: "G-E9KTKBBFT1",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
