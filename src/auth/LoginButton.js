import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="justify-center ">
      <button onClick={() => loginWithRedirect()} className="btn capitalize btn-primary font-normal rounded-md mb-4 text-md">Login</button>
    </div>
  );
  
};


export default LoginButton;