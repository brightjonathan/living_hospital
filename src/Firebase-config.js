import {getAuth, GoogleAuthProvider} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';;



// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket, 
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId 
// };

const firebaseConfig = {
  apiKey: "AIzaSyCiK2Y8QmrY8mvA3MS8oM-Bo--lWhfnaOo",
  authDomain: "centralhospitaldashboard.firebaseapp.com",
  projectId: "centralhospitaldashboard",
  storageBucket: "centralhospitaldashboard.appspot.com",
  messagingSenderId: "220984957011",
  appId: "1:220984957011:web:59a1aaa815013a53ca4ea6",
  measurementId: "G-YZBQXV7JF0"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app); // for storing data into firestore 
export const provider = new GoogleAuthProvider(); //signing in with google 
export default app;

