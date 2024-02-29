import SignupButton from "../auth/SignupButton";
import LoginButton from "../auth/LoginButton";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";
import preview1 from "../assets/shot1.png";
import preview2 from "../assets/shot2.png";


const Home = () => {

    const {isAuthenticated } = useAuth0();
    const navigate = useNavigate()

    return ( 
        <>
            <div className="flex flex-col min-h-[100dvh]">
                <main className="flex-1">
                    <section className="w-full mt-36 mb-24 ">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold sm:text-5xl">Your notes. Organized.</h1>
                            <p className="max-w-[600px] text-gray-500 text-xl md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-500">
                            The beautiful note-taking app for capturing your thoughts. Take notes, make lists, and stay organized.
                            </p>
                        </div>
                        <div className="mx-auto max-w-sm space-y-2">
                        {isAuthenticated ? (
                            <button onClick={()=>{navigate('/dashboard')}} className="btn btn-primary gap-2 capitalize rounded-md font-normal border bg-primary text-base-100">Dashboard</button>
                            ) : (
                            <div>
                                <div className="flex gap-2 justify-center">
                                <LoginButton/>
                                <SignupButton/>
                                </div>
                               
                                <a className="text-sm text-neutral">You don't have an account?</a><span className="text-sm text-neutral"> use demo account</span><br/>
                                    <h5 className="flex justify-center gap-2 text-sm text-gray-500 dark:text-[#ffffff]">
                                        <div className="underline text-neutral">
                                            <span className="badge bg-transparent border-none text-neutral">Email:</span>
                                            test@gmail.com
                                        </div>
                                        <div className="underline text-neutral">
                                            <span className="badge bg-transparent border-none text-neutral">Password:</span>
                                            Test1234
                                        </div>
                                    </h5>
                            </div>
                            )
                        }
                        </div>
                        </div>
                    </div>
                    </section>
                    <section className="w-full py-12 md:py-24 lg:py-24 border-t" id="features">
                    <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                        <img
                        alt="Image"
                        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                        height="310"
                        src={preview1}
                        width="550"
                        />
                        
                        <div className="space-y-4">
                        <h2 className="text-3xl font-bold  sm:text-4xl md:text-5xl">Features</h2>
                        <ul className="grid gap-4">
                            <li>
                            <div className="grid gap-1">
                                <h3 className="text-xl font-semibold">Notes</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Capture your thoughts with our beautiful note editor.
                                </p>
                            </div>
                            </li>
                            <li>
                            <div className="grid gap-1">
                                <h3 className="text-xl font-semibold">Access Anywhere</h3>
                                <p className="text-gray-500 dark:text-gray-400">Access your notes from any device, wherever you go.</p>
                            </div>
                            </li>
                            <li>
                            <div className="grid gap-1">
                                <h3 className="text-xl font-semibold">Personalize</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                Personalize your notes with a variety of background colors, making them uniquely yours.
                                </p>
                            </div>
                            </li>
                        </ul>
                        </div>
                    </div>
                    </section>
                    <section className="w-full py-12 md:py-24 lg:py-26" id="upcoming">
                    <div className="container px-4 md:px-6">
                        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
                        <div className="space-y-4">
                            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">Upcoming Features</h2>
                            <ul className="grid gap-4">
                            <li>
                                <div className="grid gap-1">
                                <h3 className="text-xl font-semibold line-through decoration-2">Dark Mode</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Enable a sleek dark mode for late-night note-taking.
                                </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                <h3 className="text-xl font-semibold">Tagging and Categorization</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Create custom tags, and categorize notes for easier searching and filtering.
                                </p>
                                </div>
                            </li>
                            <li>
                                <div className="grid gap-1">
                                <h3 className="text-xl font-semibold">Smart Search</h3>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Let AI find what you need in your notes with ease.
                                </p>
                                </div>
                            </li>
                            </ul>
                        </div>
                        <img
                            alt="Image"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                            height="310"
                            src={preview2}
                            width="550"
                        />
                        </div>
                    </div>
                    </section>
                </main>
                <footer className="flex flex-col gap-2 sm:flex-row pb-2 pt-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                    <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Noteed. All rights reserved.</p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <a className="text-xs hover:underline underline-offset-4" href="#">
                        Terms of Service
                    </a>
                    <a className="text-xs hover:underline underline-offset-4" href="#">
                        Privacy
                    </a>
                    </nav>
                </footer>
            </div>
        </>
     );
}
 
export default Home;