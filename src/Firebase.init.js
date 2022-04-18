// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import getAuth from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD_9aUfK1BCUq98rF3q7_lq-6ATz6SJXWM",
    authDomain: "wildstudio-1db3d.firebaseapp.com",
    projectId: "wildstudio-1db3d",
    storageBucket: "wildstudio-1db3d.appspot.com",
    messagingSenderId: "447924250926",
    appId: "1:447924250926:web:004c26e7e8e9ffdd6932bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;