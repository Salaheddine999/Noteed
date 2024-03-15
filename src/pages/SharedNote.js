import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../components/logo/Logo';

function SharedNote() {

    const location = useLocation();
    const [isExpanded, setIsExpanded] = useState(false);
    const params = new URLSearchParams(location.search);
    const title = params.get('title');
    const body = params.get('body');
    const color = params.get('color');
    const user = params.get('user');

    useEffect(() => {
        document.title = `Noteed - ${decodeURIComponent(title)}`;
        document.querySelector("html").setAttribute("data-theme", "lofi");
    }, []);

    useEffect(() => {
        const bodyElement = document.querySelector('.text-clamp-3');
        if (bodyElement.scrollHeight > bodyElement.clientHeight) {
            bodyElement.classList.add('overflowed');
        }
    }, [body]);

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded);
    };
    
    // Add a new state variable
    const [lineCount, setLineCount] = useState(0);

    // Update the useEffect hook that depends on 'body'
    useEffect(() => {
        const bodyElement = document.querySelector('.text-clamp-3');
        if (bodyElement.scrollHeight > bodyElement.clientHeight) {
            bodyElement.classList.add('overflowed');
        }

        // Calculate the number of lines in the body
        const lineHeight = parseInt(window.getComputedStyle(bodyElement).getPropertyValue('line-height'));
        const lines = Math.floor(bodyElement.scrollHeight / lineHeight);
        setLineCount(lines);
    }, [body]);

return (
    <div className='bg-[#FAFAFA]'>
        <div className="flex justify-center items-center h-screen mx-auto max-w-2xl">
            <div className="relative group overflow-hidden p-8 rounded-xl bg-white drop-shadow-xl">
                <div className='flex items-center justify-center text-3xl font-semibold'>
                    <Logo />
                </div>
                {/* <div className="divider opacity-40"></div> */}
                <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 duration-300 blur-2xl opacity-9 z-[-2]" style={{ background: `linear-gradient(to bottom, ${decodeURIComponent(color)}, white)` }}></div>
                <div className="relative rounded-xl p-6 mb-2">    
                <div className="mt-12 pb-6 rounded-b-[--card-border-radius]">
                    <h1 className="text-xl font-semibold mb-4">{decodeURIComponent(title)}</h1>
                    <p className={`text-lg leading-[1.4] ${isExpanded ? '' : 'text-clamp-3'}`}>{decodeURIComponent(body)}</p>
                    {isExpanded ? 
                        <button className="show-less text-xs text-gray-500" onClick={toggleExpanded}>Show Less</button> :
                        (lineCount > 3 ? <button className="read-more text-xs text-gray-500 " onClick={toggleExpanded}>Show More</button> : null)
                    }
                </div>
                    <p className='text-right text-sm text-gray-700'>By {decodeURIComponent(user)}</p>
                </div>
                <div className="flex justify-center">
                    <p className="text-sm text-gray-400">This note is shared using <Link className="hover:underline" to="/">Noteed</Link></p>
                </div>    
            </div>
        </div>
    </div>

);
}

export default SharedNote;
