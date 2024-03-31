/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            animation: {
                marquee: 'marquee 20s linear infinite',
                marquee2: 'marquee2 20s linear infinite',
                marquee3: 'marquee3 20s linear infinite',
                marquee4: 'marquee4 20s linear infinite',
                blob: 'blob 6s infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                marquee2: {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                marquee3: {
                    '0%': { transform: 'translateX(0%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                marquee4: {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(0%)' },
                },
                blob: {
                    '0%': {
                        transform: 'translate(0px, 0px) scale(1)',
                    },
                    '33%': {
                        transform: 'translate(30px, -50px) scale(1.1)',
                    },
                    '66%': {
                        transform: 'translate(-20px, 20px) scale(0.9)',
                    },
                    '100%': {
                        transform: 'tranlate(0px, 0px) scale(1)',
                    },
                },
            },
        },
    },
    plugins: [require('daisyui')],
    daisyui: {
        themes: [
            {
                dark: {
                    primary: '#f1f1f1',
                    secondary: '#ffffff',
                    accent: '#d3d1d1',
                    neutral: '#d3d1d1',
                    'base-100': '#1f1e1e',
                    warning: '#ef4444',
                },
            },
            'lofi',
        ],
    },
};
