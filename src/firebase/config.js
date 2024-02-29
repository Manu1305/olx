import firebase from "firebase"
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig ={
  apiKey: "AIzaSyCzVSWpcJu2ds31O3RxakUls2BRVnPFc_0",
  authDomain: "olxproject-6712f.firebaseapp.com",
  projectId: "olxproject-6712f",
  storageBucket: "olxproject-6712f.appspot.com",
  messagingSenderId: "664691943726",
  appId: "1:664691943726:web:97e23849db0549282ab2bf",
  measurementId: "G-RLP1KKLJ82"
};

export default firebase.initializeApp(firebaseConfig)
