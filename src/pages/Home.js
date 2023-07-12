import SignupButton from "../auth/SignupButton";
import LoginButton from "../auth/LoginButton";
import {RiLockPasswordLine} from "react-icons/ri"
import {AiOutlineUser} from "react-icons/ai"
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";

const Home = () => {

    const {isAuthenticated } = useAuth0();
    const navigate = useNavigate()

    return ( 
        <>
            <div className="hero bg-base-200 rounded-xl px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-semibold">👋Hello there</h1>
                        <p className="py-6 text-lg">Noteed is a free minimal app that helps you write and manage your thoughts or todo lists.</p>
                        {isAuthenticated ? (
                            <button onClick={()=>{navigate('/dashboard')}} className="btn btn-primary gap-2 rounded-md font-normal border bg-primary text-base-100">Home</button>
                            ) : (
                            <div>
                                <LoginButton/><br/>
                                <a className="link-accent">You don't have an account?</a><span className="font-medium"> use demo account</span><br/>
                                    <h5 className="text-lg font-medium">
                                        <span className="badge badge-ghost"><AiOutlineUser className="h-5 w-5"/></span>
                                        test@gmail.com
                                    </h5>
                                    <h5 className="text-lg font-medium">
                                        <span className="badge badge-ghost"><RiLockPasswordLine className="h-5 w-5"/></span>
                                        Test1234
                                    </h5>
                                <div className="divider">OR</div> 
                                <a className="link link-accent"><SignupButton/></a>
                            </div>
                            )
                        }
                    </div>
                </div>
            </div>

        </>
     );
}
 
export default Home;