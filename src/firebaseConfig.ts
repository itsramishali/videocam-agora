import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDHwoRXZdMbnSSPb9hNbuJ6ORufprCTAfE",
    authDomain: "loginauth-0.firebaseapp.com",
    projectId: "loginauth-0",
    storageBucket: "loginauth-0.appspot.com",
    messagingSenderId: "647124669575",
    appId: "1:647124669575:web:bff46584b462460f77d422",
    measurementId: "G-FMXXHZ74V8"
};


export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }; // Export the 'auth' object


