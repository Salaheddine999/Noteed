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
