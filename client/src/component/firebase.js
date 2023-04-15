import { initializeApp } from "firebase/app";       //there are many suite in firebase firbase/app is one which
                                                    //provide us to instanciate our app and connect with online console
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8UWhywO3PAvbkv2AsXRmUZkj66PpnjhU",
  authDomain: "shopgen-z.firebaseapp.com",
  projectId: "shopgen-z",
  storageBucket: "shopgen-z.appspot.com",
  messagingSenderId: "1017955955401",
  appId: "1:1017955955401:web:b1376853b899b85ae2d318"
};

// Initialize Firebase it helps to connect this instance with the online instance 
const app = initializeApp(firebaseConfig);

const provider= new GoogleAuthProvider();

provider.setCustomParameters({
    prompt:'select_account'         //with custom paramater these we tell how the provider should behave
});

export const auth= getAuth();
export const signInWithGooglePopup= () => signInWithPopup(auth, provider);

export const db = getFirestore();               //seting up the db

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {   
  const userDocRef = doc(db, 'users', userAuth.uid);        //doc check wheather there is any refernc with this
                                                            // id exits or not if not it makes a new reference
  const userSnapshot = await getDoc(userDocRef);            //users thn mak unique document whch is instanctanc
                                                            //then getDoc method is used to check the data 
  if (!userSnapshot.exists()) {                             //inside the document
    const { displayName, email } = userAuth;                //If the data does not exit 
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword= async(email, password)=>{
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword= async(email, password)=>{
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
}
