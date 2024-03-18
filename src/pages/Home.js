import SignupButton from '../auth/SignupButton';
import LoginButton from '../auth/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import preview1 from '../assets/472shots_so.png';
import preview2 from '../assets/203shots_so.png';
import GetStarted from '../auth/GetStarted';
import { RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import {
    RiFlashlightFill,
    RiMoonFill,
    RiListUnordered,
    RiPrinterFill,
    RiShareForwardFill,
} from 'react-icons/ri';
import { TbFileExport } from 'react-icons/tb';
import { MdSync } from 'react-icons/md';

const Home = () => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    return (
        <div className="text-primary">
            <div className="flex flex-col min-h-[100dvh]">
                <main className="flex-1">
                    <section className="w-full mt-28 mb-24 ">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <span className="relative inline-block overflow-hidden rounded-full p-[1px] mb-4">
                                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)]" />
                                        <div className="inline-flex h-full w-full justify-center rounded-full bg-base-100 px-3 py-1 text-xs font-normal leading-5 text-secondary backdrop-blur-xl">
                                            New features⚡️
                                            <a
                                                className="inline-flex items-center justify-center text-secondary font-medium"
                                                href="https://github.com/Salaheddine999/Noteed"
                                                target="_Blank"
                                            >
                                                Read more{' '}
                                                <RiArrowRightLine
                                                    className="pl-0.5 text-secondary"
                                                    size={15}
                                                />
                                            </a>
                                        </div>
                                    </span>
                                    <h1 className="text-5xl font-semibold sm:text-[58px] tracking-tight">
                                        Your notes. Organized.
                                    </h1>
                                    <p className="max-w-[600px] text-gray-500 text-md sm:text-lg md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed tracking-tight">
                                        The beautiful note-taking app for
                                        capturing your thoughts. Take notes,
                                        make lists, and stay organized.
                                    </p>
                                </div>
                                <div className="mx-auto max-w-sm space-y-2">
                                    {isAuthenticated ? (
                                        <button
                                            onClick={() => {
                                                navigate('/dashboard');
                                            }}
                                            className="btn btn-primary gap-2 capitalize rounded-md font-normal border bg-primary text-base-100"
                                        >
                                            Dashboard
                                        </button>
                                    ) : (
                                        <div>
                                            <div className="flex gap-2 justify-center">
                                                <LoginButton />
                                                <SignupButton />
                                            </div>

                                            <a className="text-sm text-neutral">
                                                Would you like to try the app?
                                            </a>
                                            <span className="text-sm text-neutral">
                                                {' '}
                                                use demo account
                                            </span>
                                            <br />
                                            <h5 className="flex justify-center gap-2 text-sm text-gray-500 dark:text-[#ffffff]">
                                                <div className="underline text-neutral">
                                                    <span className="badge bg-transparent border-none text-neutral">
                                                        Email:
                                                    </span>
                                                    demo@email.com
                                                </div>
                                                <div className="underline text-neutral">
                                                    <span className="badge bg-transparent border-none text-neutral">
                                                        Password:
                                                    </span>
                                                    Demo1234
                                                </div>
                                            </h5>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        className="w-full py-12 md:py-24 lg:py-24 border-t"
                        id="features"
                    >
                        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                            <img
                                alt="Image"
                                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
                                height="310"
                                src={preview1}
                                width="550"
                            />

                            <div className="space-y-4 text-primary">
                                <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl tracking-tight">
                                    Introducing Noteed
                                </h2>
                                <ul className="grid gap-4">
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-medium">
                                                Notes📝
                                            </h3>
                                            <p className="text-gray-500">
                                                Capture your thoughts with our
                                                beautiful note editor.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-medium">
                                                Access Anywhere📱
                                            </h3>
                                            <p className="text-gray-500">
                                                Access your notes from any
                                                device, wherever you go.
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="grid gap-1">
                                            <h3 className="text-xl font-medium">
                                                Personalize🎨
                                            </h3>
                                            <p className="text-gray-500">
                                                Personalize your notes with a
                                                variety of background colors,
                                                making them uniquely yours.
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section className="w-full py-8 md:py-16 lg:py-20 xl:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 items-center">
                                <div className="flex flex-col justify-center space-y-4 text-center">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl tracking-tight">
                                            Discover Our Unique Features
                                        </h1>
                                        <p className="max-w-[600px] text-gray-500 text-md mx-auto sm:text-lg md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed tracking-tight">
                                            Our features are designed to enhance
                                            your productivity and streamline
                                            your workflow.
                                        </p>
                                    </div>
                                    <div className="w-full max-w-full space-y-4 mx-auto">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {/* Feature 1 */}
                                            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-gray-50 opacity-95">
                                                {/* Icon */}
                                                <div className="p-2 rounded-full bg-gradient-to-r from-[#fd7761] to-[#faccd4] mb-1">
                                                    <RiFlashlightFill className="text-gray-100 h-5 w-5" />
                                                </div>
                                                {/* Title */}
                                                <h2 className="text-xl font-medium text-black">
                                                    Super Fast
                                                </h2>
                                                {/* Description */}
                                                <p className="text-black">
                                                    Enjoy lightning-fast
                                                    note-taking and editing with
                                                    Noteed's efficient
                                                    performance.
                                                </p>
                                            </div>
                                            {/* Feature 2 */}
                                            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-gray-50 opacity-95">
                                                {/* Icon */}
                                                <div className="p-2 rounded-full bg-gradient-to-r from-[#fd7761] to-[#faccd4] mb-1">
                                                    <RiMoonFill className="text-gray-100 h-5 w-5" />
                                                </div>
                                                {/* Title */}
                                                <h2 className="text-xl font-medium text-black">
                                                    Night Mode
                                                </h2>
                                                {/* Description */}
                                                <p className="text-black">
                                                    Switch to a darker color
                                                    scheme for comfortable
                                                    note-taking in low-light
                                                    environments.
                                                </p>
                                            </div>
                                            {/* Feature 3 */}
                                            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-gray-50 opacity-95">
                                                {/* Icon */}
                                                <div className="p-2 rounded-full bg-gradient-to-r from-[#fd7761] to-[#faccd4] mb-1">
                                                    <RiListUnordered className="text-gray-100 h-5 w-5" />
                                                </div>
                                                {/* Title */}
                                                <h2 className="text-xl font-medium text-black">
                                                    Text Editor
                                                </h2>
                                                {/* Description */}
                                                <p className="text-black">
                                                    Use Markdown syntax to
                                                    format your notes quickly
                                                    and easily for better
                                                    organization.
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-gray-50 opacity-95">
                                                {/* Icon */}
                                                <div className="p-2 rounded-full bg-gradient-to-r from-[#fd7761] to-[#faccd4] mb-1">
                                                    <TbFileExport className="text-gray-100 h-5 w-5" />
                                                </div>
                                                {/* Title */}
                                                <h2 className="text-xl font-medium text-black">
                                                    Print & Export
                                                </h2>
                                                {/* Description */}
                                                <p className="text-black">
                                                    Save and print your notes in
                                                    various formats for easy
                                                    sharing and offline access.
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-gray-50 opacity-95">
                                                {/* Icon */}
                                                <div className="p-2 rounded-full bg-gradient-to-r from-[#fd7761] to-[#faccd4] mb-1">
                                                    <MdSync className="text-gray-100 h-5 w-5" />
                                                </div>
                                                {/* Title */}
                                                <h2 className="text-xl font-medium text-black">
                                                    Multi-Device Sync
                                                </h2>
                                                {/* Description */}
                                                <p className="text-black">
                                                    Keep notes consistent across
                                                    all your devices, ensuring
                                                    easy access and continuity.
                                                </p>
                                            </div>
                                            <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg bg-gray-50 opacity-95">
                                                {/* Icon */}
                                                <div className="p-2 rounded-full bg-gradient-to-r from-[#fd7761] to-[#faccd4] mb-1">
                                                    <RiShareForwardFill className="text-gray-100 h-5 w-5" />
                                                </div>
                                                {/* Title */}
                                                <h2 className="text-xl font-medium text-black">
                                                    Share
                                                </h2>
                                                {/* Description */}
                                                <p className="text-black">
                                                    Share your notes with others
                                                    by generating a unique link
                                                    for easy access.
                                                </p>
                                            </div>
                                            {/* Repeat for other features */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section
                        className="w-full py-12 md:py-24 lg:py-26"
                        id="upcoming"
                    >
                        <div className="container px-4 md:px-6">
                            <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl tracking-tight">
                                        What's Next
                                    </h2>
                                    <ul className="grid gap-4">
                                        <li>
                                            <div className="grid gap-1">
                                                <h3 className="text-xl font-medium">
                                                    Collaboration🤝🏻
                                                </h3>
                                                <p className="text-gray-500">
                                                    Enable a sleek dark mode for
                                                    late-night note-taking.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="grid gap-1">
                                                <h3 className="text-xl font-medium">
                                                    Tagging and Categorization🏷️
                                                </h3>
                                                <p className="text-gray-500">
                                                    Create custom tags, and
                                                    categorize notes for easier
                                                    searching and filtering.
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="grid gap-1">
                                                <h3 className="text-xl font-medium">
                                                    Ai Assistant✨
                                                </h3>
                                                <p className="text-gray-500">
                                                    Let AI find what you need in
                                                    your notes with ease.
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
                    <section className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center">
                        <div className="container flex flex-col items-center gap-4 px-4 md:px-6 text-center">
                            <div className="space-y-2">
                                <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl tracking-tight">
                                    Get Organized, Get Noted!
                                </h2>
                                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                    Start your note-taking journey with Noteed
                                    and streamline your productivity today!
                                </p>
                            </div>
                            <div className="flex flex-col gap-4 max-w-sm w-full">
                                <GetStarted />
                            </div>
                        </div>
                    </section>

                    <section className="w-full py-12 md:py-24 lg:py-32 border-t">
                        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
                            <div className="space-y-4">
                                <h2 className="text-3xl font-semibold sm:text-3xl md:text-3xl tracking-tight">
                                    Contributions
                                </h2>
                                <p className="text-secondary">
                                    For any suggestions or bugs reporting! Check
                                    the{' '}
                                    <a
                                        className="font-semibold"
                                        href="https://github.com/Salaheddine999/Noteed"
                                    >
                                        Github repository
                                    </a>
                                    . Thanks!
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="flex flex-col gap-2 sm:flex-row pb-6 pt-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                    <p className="text-xs text-gray-500">
                        © 2024 Noteed | Made by{' '}
                        <span className="font-medium">Salah eddine</span>
                    </p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link
                            className="text-xs hover:underline underline-offset-4"
                            to="/terms-of-use"
                        >
                            Terms of Use
                        </Link>
                    </nav>
                </footer>
            </div>
        </div>
    );
};
function StarIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
    );
}
export default Home;
