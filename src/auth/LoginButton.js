import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="justify-center ">
      <button onClick={() => loginWithRedirect()} className="btn btn-primary font-normal rounded-md">Log In</button>
    </div>
  );
  
};

export default LoginButton;