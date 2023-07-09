/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        dark: {
          "primary": "#d3d1d1",
          "secondary": "#d3d1d1",
          "accent": "#d3d1d1",
          "neutral": "#d3d1d1",
          "base-100": "#1f1e1e",
          "warning": "#ef4444",
        },
      },
      "lofi",
    ],
  },
}
