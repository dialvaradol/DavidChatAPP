import React from "react";
import GoogleSignin from "../img/14.jpg";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <nav className="nav-bar">
     <img src="../456.jpg" alt="ReactJs logo" width={400} height={100} />
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Profile
        </button>
        
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
        
      )}
    </nav>
    
  );
  
};



export default NavBar;