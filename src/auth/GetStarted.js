import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const GetStarted = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
    className='btn capitalize btn-primary font-normal rounded-md mb-4 text-md w-1/2 mx-auto'
      onClick={() =>
        loginWithRedirect({
          screen_hint: 'signup',
        })
      }
    >
      Join Noteed
    </button>
  );
};

export default GetStarted;