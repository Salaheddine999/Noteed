import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { RiArrowRightLine } from 'react-icons/ri';
const GetStarted = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button
            className="btn btn-md sm:px-8 normal-case bg-black border-black text-white font-medium sm:text-lg rounded-xl border-2 hover:bg-white hover:text-black hover:border-black"
            onClick={() =>
                loginWithRedirect({
                    screen_hint: 'signup',
                })
            }
        >
            Try it now
            <RiArrowRightLine className="pl-0.5" size={25} />
        </button>
    );
};

export default GetStarted;
