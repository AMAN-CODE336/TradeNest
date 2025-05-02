// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmyss24II4PJJDGC0rHYg-3AHP3QjFPWk",
  authDomain: "stock-app-64dc6.firebaseapp.com",
  projectId: "stock-app-64dc6",
  storageBucket: "stock-app-64dc6.firebasestorage.app",
  messagingSenderId: "93291879513",
  appId: "1:93291879513:web:35b9e8ebb4935dee9b6548"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export const Signinwithgoogle = async () => {
  try{
const result = await signInWithPopup(auth , provider)
const user = result.user
return user
  }catch(error){ 
console.error(error)
return null 
  }
}

export const logout = async ()=>{
  try{
    await signOut(auth)
  }catch (error){
    console.error(error)
  }
}

export { auth , provider}