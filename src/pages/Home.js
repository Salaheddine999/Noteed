import SignupButton from "../auth/SignupButton";
import LoginButton from "../auth/LoginButton";
import {RiLockPasswordLine} from "react-icons/ri"
import {AiOutlineUser} from "react-icons/ai"

const Home = () => {

    return ( 
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-semibold">👋Hello there</h1>
                        <p className="py-6">Noteed is a free minimal app that helps you write and manage your thoughts or todo lists.</p>
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
                </div>
            </div>
        </>
     );
}
 
export default Home;