 import firebase from "firebase";
 


const firebaseConfig = {
    apiKey: "AIzaSyABmN3dz_vpx2uk1ftk_83tqXOQzQmhR8g",
    authDomain: "linkedin-app-test.firebaseapp.com",
    projectId: "linkedin-app-test",
    storageBucket: "linkedin-app-test.appspot.com",
    messagingSenderId: "256715212471",
    appId: "1:256715212471:web:5e46ce123b479026d92f32"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export {auth, provider, storage};
export default db;

