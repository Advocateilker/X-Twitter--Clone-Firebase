
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, } from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBMwGw3MXRES8zK1TCIu5qROQH40hH06iY",
    authDomain: "twitter-x-b63ad.firebaseapp.com",
    projectId: "twitter-x-b63ad",
    storageBucket: "twitter-x-b63ad.appspot.com",
    messagingSenderId: "526154731786",
    appId: "1:526154731786:web:2a9fd8888013bf0c86aaf3"
};


const app = initializeApp(firebaseConfig);


//auth
export const auth = getAuth(app)
//Google
export const provider = new GoogleAuthProvider(app)

// firebase referansı alma
export const db = getFirestore(app);

// storage referansı alma
export const storage = getStorage(app);