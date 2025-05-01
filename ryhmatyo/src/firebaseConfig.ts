import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASYwIzO5yZI8LzSL1k3p4Rua7lCgcCLvQ",
  authDomain: "mobile-app-groupproject.firebaseapp.com",
  projectId: "mobile-app-groupproject",
  storageBucket: "mobile-app-groupproject.firebasestorage.app",
  messagingSenderId: "303424866573",
  appId: "1:303424866573:web:36bad41f8b37ac240fc844",
  measurementId: "G-7DCK1Y1JBL"
};

// Initialize Firebase
/*const app = */firebase.initializeApp(firebaseConfig);
/*????????*/


export async function loginUser(emailuser: string, password: string) {

    const email = `${emailuser}`
    //convert username to a fake email for email auth in firebase
    //please dont crucify me for this i didnt want to parse every username and i couldnt figure 
    //out how to do username logins on firebase
    try {
    const res = await firebase.auth().signInWithEmailAndPassword(email,password)
    console.log(res)
    return true

    } catch(error) {
        console.log(error)
        return false
    }
    // authenticating with firebase
    // if user, proceed, if not, error
  }

  export async function registerUser(emailuser: string, password: string) {
    const email = `${emailuser}`
    try {
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password)
        console.log(res)
        return true
    } catch (error) {
        console.log(error)
        
        return false
        
    }
  }