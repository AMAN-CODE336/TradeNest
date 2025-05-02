import { Signinwithgoogle } from "./Firebase";
import axios from "axios";


export default function Signinwithgogglebutton() {

  async function handlelogin() {
    const googleuser = await Signinwithgoogle();

    if (!googleuser) {
      alert("Google Sign-In was cancelled or failed.");
      return;
    }

    console.log("Google user:", googleuser);

    const userdata = {
        name : googleuser.displayName,
        email : googleuser.email,
        photoURL : googleuser.photoURL
    }
    localStorage.setItem('user' , JSON.stringify(userdata))
    window.location.href = ("/trade")
   

    try {
      const response = await axios.post("http://localhost:3000/api/google-login", {
        name: googleuser.displayName,
        email: googleuser.email,
        photoURL : googleuser.photoURL
      });

      localStorage.setItem("token", response.data.token);
      
    } catch (error) {
      console.error("Error sending to backend:", error);
      alert("Login failed. Please try again.");
    }
  }

  return (
    <button
      onClick={handlelogin}
      className="w-auto mt-4 flex items-center justify-center gap-3 border border-gray-300 bg-white hover:bg-gray-800 hover:text-white text-gray-800 font-medium py-2 px-4 rounded shadow-sm transition duration-200"
    >
      Sign in with Google
    </button>
  );
}
