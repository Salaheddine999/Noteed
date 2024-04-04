import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/icon_1.png';

export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row pb-6 pt-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <img src={icon} className="w-12 h-12" />
            <p className="text-sm text-gray-800">
                Made by <span className="font-medium">Salah eddine</span>
            </p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link
                    className="text-sm hover:underline underline-offset-4 text-black"
                    to="/terms-of-use"
                >
                    Terms of Use
                </Link>
            </nav>
        </footer>
    );
}
