import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: "netflix-clone-2-377de.firebaseapp.com",
  projectId: "netflix-clone-2-377de",
  storageBucket: "netflix-clone-2-377de.appspot.com",
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MEASURMENT_ID}`,
  appId: `${process.env.REACT_APP_FIREBASE_API_ID}`,
  measurementId: `${process.env.REACT_APP_FIREBASE_MEASSAGESENDING_ID}`
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
 
const auth = firebase.auth();

// google authantication 
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle =(e) =>{
  e.preventDefault();
  auth.signInWithPopup(googleProvider).then((res)=>{
    console.log(res.user);
  }).catch((error)=>{
    console.log(error.message);
  })
}
 
export { auth, signInWithGoogle };
export default db;
