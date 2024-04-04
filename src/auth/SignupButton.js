import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <button
            className="btn btn-md sm:btn-lg sm:px-10 normal-case text-white bg-black font-medium text-lg sm:text-xl rounded-xl mb-4 border-2 border-black hover:bg-white hover:text-black hover:border-black"
            onClick={() =>
                loginWithRedirect({
                    screen_hint: 'signup',
                })
            }
        >
            <svg
                fill="currentColor"
                width="22px"
                height="22px"
                viewBox="0 0 512 512"
                id="icons"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M208,512,155.62,372.38,16,320l139.62-52.38L208,128l52.38,139.62L400,320,260.38,372.38Z"></path>
                    <path d="M88,176,64.43,111.57,0,88,64.43,64.43,88,0l23.57,64.43L176,88l-64.43,23.57Z"></path>
                    <path d="M400,256l-31.11-80.89L288,144l80.89-31.11L400,32l31.11,80.89L512,144l-80.89,31.11Z"></path>
                </g>
            </svg>
            Sign up for free
        </button>
    );
};

export default SignupButton;
