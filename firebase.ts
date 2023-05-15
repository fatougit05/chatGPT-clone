import {getApp, getApps, initializeApp} from "firebase/app"
import {getFirestore} from "firebase/firestore"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJIwhMA3ceos1s2zFmZDv0Hq1VMn6KTSM",
  authDomain: "chatgpt-clone-970d1.firebaseapp.com",
  projectId: "chatgpt-clone-970d1",
  storageBucket: "chatgpt-clone-970d1.appspot.com",
  messagingSenderId: "640547695541",
  appId: "1:640547695541:web:7e6e9bd0f2fb71366107fc"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }