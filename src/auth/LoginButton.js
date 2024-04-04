import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div className="justify-center ">
            <a
                onClick={() => loginWithRedirect()}
                class="cursor-pointer sm:px-5 sm:py-2.5 border-2 border-black font-medium sm:bg-black hover:bg-transparent hover:text-black sm:border-2 sm:hover:border-black sm:hover:border-2 text-black sm:text-gray-50 rounded-lg text-sm"
            >
                Login
            </a>
        </div>
    );
};

export default LoginButton;
