import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <div className="justify-center rounded-md">
      <a onClick={() => logout({ returnTo: window.location.origin })} className="link link-hover">
        Log out
      </a>
    </div>
  );
};

export default LogoutButton;