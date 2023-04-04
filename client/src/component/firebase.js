import { initializeApp } from "firebase/app";       //there are many suite in firebase firbase/app is one which
                                                    //provide us to instanciate our app and connect with online console
import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider
} from 'firebase/auth'


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


