
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, } from "firebase/auth"
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
   SECRET
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
