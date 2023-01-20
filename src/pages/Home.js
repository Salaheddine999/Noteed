import SignupButton from "../auth/SignupButton";
import LoginButton from "../auth/LoginButton"

const Home = () => {

    return ( 
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                    <h1 className="text-5xl font-bold">👋Hello there</h1>
                    <p className="py-6">Noteed is a free minimal app that helps you write and manage your thoughts or todo lists.</p>
                    <LoginButton/><br/><br/>
                    <a className="link-accent">You don't have an account?</a><br/>
                    <a className="link link-accent"><SignupButton/></a>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Home;