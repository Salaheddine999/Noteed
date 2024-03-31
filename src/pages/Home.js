import SignupButton from '../auth/SignupButton';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import preview1 from '../assets/380shots_so.png';
import preview2 from '../assets/605shots_so.png';
import preview0 from '../assets/Devices.png';
import zwa9a from '../assets/zwa9a.svg';
import lightning from '../assets/Lightning.png';
import cloud from '../assets/Cloud.png';
import moon from '../assets/Moon.png';
import { RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { RoughNotation } from 'react-rough-notation';
import GetStarted from '../auth/GetStarted';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import icon from '../assets/icon_1.png';
const Home = () => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <div className="text-primary">
            <div className="flex flex-col min-h-[100dvh]">
                <main className="flex-1">
                    <section className="w-full mt-28 mb-16">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div class="flex items-center justify-center px-16">
                                    <div class="relative w-full max-w-full">
                                        <div class="absolute top-0 left-40 w-72 h-72 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob"></div>
                                        <div class="absolute top-0 right-48 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-2000"></div>
                                        <div class="absolute -bottom-8 left-60 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 animate-blob animation-delay-4000"></div>
                                        <div class="">
                                            <div>
                                                <img
                                                    className="absolute ml-6 sm:ml-20 w-10 h-10 sm:h-12 sm:w-12"
                                                    src={zwa9a}
                                                />
                                                <span className="relative inline-block overflow-hidden rounded-full p-[1px] shadow-md">
                                                    {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)]" /> */}
                                                    <div className="inline-flex h-full w-full justify-center rounded-full bg-white px-3 py-1 text-xs sm:text-sm font-normal leading-5 text-gray-800 backdrop-blur-xl">
                                                        New features⚡️
                                                        <a
                                                            className="inline-flex items-center justify-center text-gray-800 font-normal"
                                                            href="https://github.com/Salaheddine999/Noteed"
                                                            target="_Blank"
                                                        >
                                                            Read more{' '}
                                                            <RiArrowRightLine
                                                                className="pl-0.5 text-gray-800"
                                                                size={15}
                                                            />
                                                        </a>
                                                    </div>
                                                </span>
                                                <h1 className="text-4xl font-medium sm:text-8xl tracking-tight mb-8 mx-auto">
                                                    Ideas captured <br />
                                                    Creativity&nbsp;
                                                    <RoughNotation
                                                        type="underline"
                                                        color="#111111"
                                                        show
                                                        animationDelay={1500}
                                                        padding={-3}
                                                        strokeWidth={4}
                                                    >
                                                        unleashed.
                                                    </RoughNotation>{' '}
                                                </h1>
                                                <p className="text-center max-w-lg mx-auto tracking-wide mb-6 text-md sm:text-lg md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed tracking-tight">
                                                    With Noteed, gather,
                                                    organize, and prioritize
                                                    your notes effortlessly.
                                                    Streamline your thoughts and
                                                    stay organized with ease.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mx-auto max-w-sm">
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
                                                {/* <LoginButton /> */}
                                                <SignupButton />
                                            </div>
                                            <a className="text-sm text-neutral tracking-wide">
                                                Would you like to try the app?
                                            </a>
                                            <span className="text-sm text-neutral tracking-wide">
                                                {' '}
                                                use demo account
                                            </span>
                                            <br />
                                            <h5 className="flex justify-center gap-2 text-sm text-gray-500 dark:text-[#ffffff] tracking-wide">
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
                                            <div className="flex items-center mt-8">
                                                <div className="avatar-group -space-x-6 rtl:space-x-reverse flex gap-2 justify-center">
                                                    <div className="avatar">
                                                        <div className="w-10">
                                                            <img src="https://randomuser.me/api/portraits/women/2.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="avatar">
                                                        <div className="w-10">
                                                            <img src="https://randomuser.me/api/portraits/women/24.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="avatar">
                                                        <div className="w-10">
                                                            <img src="https://randomuser.me/api/portraits/men/2.jpg" />
                                                        </div>
                                                    </div>
                                                    <div className="avatar">
                                                        <div className="w-10">
                                                            <img src="https://randomuser.me/api/portraits/men/22.jpg" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="ml-2">
                                                    <div className="text-md flex">
                                                        {[...Array(5)].map(
                                                            (_, index) => (
                                                                <span
                                                                    key={index}
                                                                    className="text-yellow-400 text-md"
                                                                    style={{
                                                                        marginRight:
                                                                            '0.1rem',
                                                                    }} // Adjust margin between stars if needed
                                                                >
                                                                    &#9733;
                                                                </span>
                                                            ),
                                                        )}
                                                    </div>
                                                    <p className="text-sm">
                                                        Loved by 100+ users
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div>
                            <img
                                src={preview0}
                                className="mx-auto mt-14 aspect-video h-auto w-[90%] rounded-xl overflow-hidden object-cover object-center"
                            />
                        </div>
                    </section>

                    <section
                        className="w-full py-8 md:py-16 lg:py-16 xl:py-20"
                        id="features"
                    >
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 items-center">
                                <div className="flex flex-col justify-center space-y-4 text-center">
                                    <div className="space-y-2 mb-8">
                                        <span className="relative inline-block overflow-hidden rounded-full p-[1px] shadow-md">
                                            {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)]" /> */}
                                            <div className=" inline-flex h-full w-full justify-center rounded-full bg-white px-3 py-1 text-sm font-normal leading-5 text-gray-800 backdrop-blur-xl">
                                                Noteed Features
                                            </div>
                                        </span>
                                        <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl tracking-normal">
                                            See All Features
                                        </h1>
                                        <p className="text-center max-w-lg mx-auto tracking-wide mb-6 text-md sm:text-lg md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed tracking-tight">
                                            Embark on a journey of discovery
                                            through a comprehensive array of
                                            features, meticulously crafted to
                                            elevate your note-taking experience
                                            to new heights, only with Noteed!
                                        </p>
                                    </div>
                                    <div className="w-full max-w-full mx-auto">
                                        <div className="hidden sm:inline">
                                            <div className="relative flex overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                                                <div className="py-8 animate-marquee whitespace-nowrap">
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🎨 Custom colors
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🌗 Dark/Light theme
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🛡️ Notes privacy
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        ⚡️ Super fast
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🎨 Custom colors
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🌗 Dark/Light theme
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🛡️ Notes privacy
                                                    </span>
                                                </div>
                                                <div className="py-8 absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🎨 Custom colors
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🌗 Dark/Light theme
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🛡️ Notes privacy
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        ⚡️ Super fast
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🎨 Custom colors
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🌗 Dark/Light theme
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🛡️ Notes privacy
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hidden sm:inline">
                                            <div className="-mt-6 mb-8 relative flex overflow-x-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                                                <div className="py-8 animate-marquee3 whitespace-nowrap">
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        ↪️ Share notes
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        ⬇️ Export notes
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🔒 Lock editor
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        📄 Print notes
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        ↪️ Share notes
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        ⬇️ Export notes
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🔒 Lock editor
                                                    </span>
                                                </div>
                                                <div className="py-8 absolute top-0 py-12 animate-marquee4 whitespace-nowrap">
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        ↪️ Share notes
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        ⬇️ Export notes
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🔒 Lock editor
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        📄 Print notes
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        ↪️ Share notes
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        ⬇️ Export notes
                                                    </span>
                                                    <span className="mx-2 text-md px-4 bg-white rounded-lg py-4 text-black border-white border-2 shadow-md">
                                                        🔒 Lock editor
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 text-gray-800">
                                            <div className="flex flex-col bg-white text-left rounded-3xl overflow-hidden p-10 shadow-md">
                                                <h3 className="text-xl font-medium mb-2">
                                                    Super Fast
                                                </h3>
                                                <p className="pb-8">
                                                    Noteed ensures your thoughts
                                                    are captured without delay,
                                                    keeping up with your pace
                                                    for efficient note-taking.
                                                </p>
                                                <img
                                                    src={lightning}
                                                    className="mx-auto w-[80%]"
                                                />
                                            </div>
                                            <div className="flex flex-col bg-white text-left rounded-3xl overflow-hidden p-10 shadow-md">
                                                <h3 className="text-xl font-medium mb-2">
                                                    Multi-Device Sync
                                                </h3>
                                                <p className="pb-8">
                                                    With Noteed, your notes sync
                                                    seamlessly across all
                                                    devices, ensuring access and
                                                    updates from anywhere.
                                                </p>
                                                <img
                                                    src={cloud}
                                                    className="mx-auto w-[80%]"
                                                />
                                            </div>{' '}
                                            <div className="flex flex-col bg-white text-left rounded-3xl overflow-hidden p-10 shadow-md">
                                                <h3 className="text-xl font-medium mb-2">
                                                    Dark Mode
                                                </h3>
                                                <p className="pb-8">
                                                    Noteed's dark mode offers a
                                                    comfortable reading and
                                                    writing experience, reducing
                                                    eye strain in low-light
                                                    settings.
                                                </p>
                                                <img
                                                    src={moon}
                                                    className="mx-auto w-[80%]"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="w-full space-y-24">
                        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
                            <div className="image-fade">
                                <img
                                    alt="Image"
                                    className="mx-auto aspect-square overflow-hidden rounded-3xl object-cover object-center"
                                    height="310"
                                    src={preview1}
                                    width="550"
                                />
                            </div>

                            <div className="space-y-6 text-primary">
                                <span className="relative inline-block overflow-hidden rounded-full p-[1px] shadow-md">
                                    {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)]" /> */}
                                    <div className="inline-flex h-full w-full justify-center rounded-full bg-white px-3 py-1 text-sm font-normal leading-5 text-gray-800 backdrop-blur-xl">
                                        Minimal Text Editor
                                    </div>
                                </span>
                                <h2 className="text-3xl font-medium sm:text-4xl md:text-4xl tracking-normal">
                                    Notion-like Editor
                                </h2>
                                <p className="text-lg max-w-sm">
                                    Level up your note-taking with Noteed's
                                    notion-like editor. Enjoy a user-friendly
                                    interface and customizable formatting
                                    options for effortless organization. Stay
                                    productive and organized with ease.
                                </p>
                                <GetStarted />
                            </div>
                        </div>
                        <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
                            <div className="space-y-6 text-primary">
                                <span className="relative inline-block overflow-hidden rounded-full p-[1px] shadow-md">
                                    {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)]" /> */}
                                    <div className="inline-flex h-full w-full justify-center rounded-full bg-white px-3 py-1 text-sm font-normal leading-5 text-gray-800 backdrop-blur-xl">
                                        Sharing Is Caring
                                    </div>
                                </span>
                                <h2 className="text-3xl font-medium sm:text-4xl md:text-4xl tracking-normal">
                                    Notes Sharing
                                </h2>
                                <p className="text-lg max-w-sm">
                                    Easily share your notes with Noteed's
                                    sharing feature. Generate links to your
                                    notes for quick and convenient sharing,
                                    perfect for sharing ideas or information
                                    with others. Stay connected and productive
                                    with Noteed.
                                </p>
                                <GetStarted />
                            </div>
                            <div className="image-fade">
                                <img
                                    alt="Image"
                                    className="mx-auto aspect-square overflow-hidden rounded-3xl object-cover object-center"
                                    height="310"
                                    src={preview2}
                                    width="550"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="my-28" id="review">
                        <div className="text-gray-600 pt-8" id="reviews">
                            <div className="text-center max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
                                <span className="relative inline-block overflow-hidden rounded-full p-[1px] mb-2 shadow-md">
                                    {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)]" /> */}
                                    <div className="inline-flex h-full w-full justify-center rounded-full bg-white px-3 py-1 text-sm font-normal leading-5 text-gray-800 backdrop-blur-xl">
                                        Reviews
                                    </div>
                                </span>
                                <div className="mb-16 space-y-4 px-6 md:px-0">
                                    <h2 className="text-center text-3xl font-semibold sm:text-4xl md:text-5xl tracking-normal text-secondary">
                                        What people are saying...
                                    </h2>
                                </div>

                                <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
                                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white  shadow-2xl shadow-gray-600/10">
                                        <div className="flex gap-4">
                                            <img
                                                className="w-12 h-12 rounded-full"
                                                src="https://randomuser.me/api/portraits/women/2.jpg"
                                                alt="user avatar"
                                                width="400"
                                                height="400"
                                                loading="lazy"
                                            />
                                            <div>
                                                <h6 className="text-lg font-medium text-gray-900 d">
                                                    Emily Watson
                                                </h6>
                                                <p className="text-sm text-gray-500">
                                                    Mobile dev
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-8 text-gray-800">
                                            Noteed is awesome! It's so easy to
                                            use and helps me stay organized. I
                                            use it for everything from shopping
                                            lists to work notes. Highly
                                            recommend!
                                        </p>
                                    </div>

                                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10 ">
                                        <div className="flex gap-4">
                                            <img
                                                className="w-12 h-12 rounded-full"
                                                src="https://randomuser.me/api/portraits/women/16.jpg"
                                                alt="user avatar"
                                                width="200"
                                                height="200"
                                                loading="lazy"
                                            />
                                            <div>
                                                <h6 className="text-lg font-medium text-gray-900">
                                                    Ava Patel
                                                </h6>
                                                <p className="text-sm text-gray-500">
                                                    Marketing
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-8 text-gray-800">
                                            {' '}
                                            I love Noteed! It's become an
                                            essential tool for my daily tasks.
                                            The ability to customize note colors
                                            and lock notes is fantastic.
                                        </p>
                                    </div>

                                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
                                        <div className="flex gap-4">
                                            <img
                                                className="w-12 h-12 rounded-full"
                                                src="https://randomuser.me/api/portraits/men/18.jpg"
                                                alt="user avatar"
                                                width="200"
                                                height="200"
                                                loading="lazy"
                                            />
                                            <div>
                                                <h6 className="text-lg font-medium text-gray-900 ">
                                                    Jacob Lee
                                                </h6>
                                                <p className="text-sm text-gray-500">
                                                    Developer
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-8 text-gray-800">
                                            Noteed is simply amazing. I use it
                                            for work and personal notes, and it
                                            has made my life so much easier. The
                                            design is clean, and the app is very
                                            user-friendly.
                                        </p>
                                    </div>

                                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
                                        <div className="flex gap-4">
                                            <img
                                                className="w-12 h-12 rounded-full"
                                                src="https://randomuser.me/api/portraits/men/33.jpg"
                                                alt="user avatar"
                                                width="200"
                                                height="200"
                                                loading="lazy"
                                            />
                                            <div>
                                                <h6 className="text-lg font-medium text-gray-900">
                                                    Ethan Clark
                                                </h6>
                                                <p className="text-sm text-gray-500">
                                                    Mobile dev
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-8 text-gray-800">
                                            I've tried many note-taking apps,
                                            but none compare to Noteed. It's
                                            intuitive, fast, and reliable. The
                                            ability to access my notes from
                                            anywhere is a game-changer.
                                        </p>
                                    </div>

                                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
                                        <div className="flex gap-4">
                                            <img
                                                className="w-12 h-12 rounded-full"
                                                src="https://randomuser.me/api/portraits/women/11.jpg"
                                                alt="user avatar"
                                                width="200"
                                                height="200"
                                                loading="lazy"
                                            />
                                            <div>
                                                <h6 className="text-lg font-medium text-gray-900">
                                                    Mia Garcia
                                                </h6>
                                                <p className="text-sm text-gray-500">
                                                    Student
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-8 text-gray-800">
                                            {' '}
                                            Noteed has been a lifesaver for my
                                            studies. I can organize my notes by
                                            subject and easily access them
                                            whenever I need to. The export
                                            feature is also great for sharing
                                            notes with classmates.
                                        </p>
                                    </div>

                                    <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white shadow-2xl shadow-gray-600/10">
                                        <div className="flex gap-4">
                                            <img
                                                className="w-12 h-12 rounded-full"
                                                src="https://randomuser.me/api/portraits/men/17.jpg"
                                                alt="user avatar"
                                                width="400"
                                                height="400"
                                                loading="lazy"
                                            />
                                            <div>
                                                <h6 className="text-lg font-medium text-gray-900 ">
                                                    Lucas Brown
                                                </h6>
                                                <p className="text-sm text-gray-500 ">
                                                    Designer
                                                </p>
                                            </div>
                                        </div>
                                        <p className="mt-8 text-gray-800">
                                            Noteed is fantastic! I use it every
                                            day for work and personal notes. The
                                            ability to customize note
                                            backgrounds and fonts is a nice
                                            touch.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="my-28" id="faq">
                        <div class="flex items-center justify-center">
                            <div class="relative w-full max-w-full">
                                {/* <div class="absolute top-60 left-72 w-72 h-72 bg-rose-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div> */}
                                <div class="absolute top-72 right-64 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay"></div>
                                <div class="absolute bottom-8 left-64 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
                                <div class="m-8 relative space-y-4">
                                    <div className="max-w-xl mx-auto text-center">
                                        <span className="relative inline-block overflow-hidden rounded-full p-[1px] mb-2 shadow-md">
                                            {/* <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)]" /> */}
                                            <div className="inline-flex h-full w-full justify-center rounded-full bg-white px-3 py-1 text-sm font-normal leading-5 text-gray-800 backdrop-blur-xl">
                                                FAQ
                                            </div>
                                        </span>

                                        <div className="mb-16 space-y-4 px-6 md:px-0">
                                            <h2 className="text-center text-3xl font-semibold sm:text-4xl md:text-5xl tracking-normal text-secondary">
                                                Frequently asked questions
                                            </h2>
                                        </div>
                                        <div className="text-left">
                                            <div className="collapse collapse-arrow bg-transparent">
                                                <input
                                                    type="radio"
                                                    name="my-accordion-2"
                                                    defaultChecked
                                                />
                                                <div className="collapse-title text-lg font-medium">
                                                    Can I access my notes from
                                                    multiple devices?
                                                </div>
                                                <div className="collapse-content">
                                                    <p>
                                                        Yes, you can access your
                                                        notes from any device
                                                        with an internet
                                                        connection by logging
                                                        into your Noteed
                                                        account.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="collapse collapse-arrow bg-transparent">
                                                <input
                                                    type="radio"
                                                    name="my-accordion-2"
                                                />
                                                <div className="collapse-title text-lg font-medium">
                                                    Is there a limit to the
                                                    number of notes I can
                                                    create?
                                                </div>
                                                <div className="collapse-content">
                                                    <p>
                                                        No, there is no limit to
                                                        the number of notes you
                                                        can create in Noteed.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="collapse collapse-arrow bg-transparent">
                                                <input
                                                    type="radio"
                                                    name="my-accordion-2"
                                                />
                                                <div className="collapse-title text-lg font-medium">
                                                    Can I share my notes with
                                                    others?
                                                </div>
                                                <div className="collapse-content">
                                                    <p>
                                                        Yes, you can share your
                                                        notes with others by
                                                        clicking on the share
                                                        icon to generate a
                                                        sharable link.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="collapse collapse-arrow bg-transparent">
                                                <input
                                                    type="radio"
                                                    name="my-accordion-2"
                                                />
                                                <div className="collapse-title text-lg font-medium">
                                                    Can I recover deleted notes?
                                                </div>
                                                <div className="collapse-content">
                                                    <p>
                                                        No, once notes are
                                                        deleted, they cannot be
                                                        recovered.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="collapse collapse-arrow bg-transparent">
                                                <input
                                                    type="radio"
                                                    name="my-accordion-2"
                                                />
                                                <div className="collapse-title text-lg font-medium">
                                                    Does Noteed support markdown
                                                    formatting?
                                                </div>
                                                <div className="collapse-content">
                                                    <p>
                                                        Yes, Noteed supports
                                                        markdown formatting for
                                                        text editing.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="collapse collapse-arrow bg-transparent">
                                                <input
                                                    type="radio"
                                                    name="my-accordion-2"
                                                />
                                                <div className="collapse-title text-lg font-medium">
                                                    How do I delete my Noteed
                                                    account?
                                                </div>
                                                <div className="collapse-content">
                                                    <p>
                                                        You can contact us by
                                                        emailing
                                                        abw.salaheddine@gmail.com.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="collapse collapse-arrow bg-transparent rounded-xl">
                                                <input
                                                    type="radio"
                                                    name="my-accordion-2"
                                                />
                                                <div className="collapse-title text-lg font-medium">
                                                    Is there a way to organize
                                                    my notes into categories or
                                                    folders?
                                                </div>
                                                <div className="collapse-content">
                                                    <p>Coming soon...</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {isVisible && (
                        <button
                            onClick={scrollToTop}
                            className="fixed bottom-[20px] right-[30px] border-2 p-2 border-secondary rounded-lg"
                        >
                            <FaArrowUp className="text-secondary" />
                        </button>
                    )}
                </main>
                <footer className="flex flex-col gap-2 sm:flex-row pb-6 pt-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                    <img src={icon} className="w-12 h-12" />
                    <p className="text-sm text-gray-800">
                        Made by{' '}
                        <span className="font-medium">Salah eddine</span>
                    </p>
                    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                        <Link
                            className="text-sm hover:underline underline-offset-4"
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
