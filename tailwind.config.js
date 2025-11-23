/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'selector',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: '#fd6e0a', // Orange from target site
                secondary: '#1a1a1a', // Dark background
            },
            animation: {
                blob: "blob 7s infinite",
                float: "float 6s ease-in-out infinite",
            },
            keyframes: {
                blob: {
                    "0%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                    "33%": {
                        transform: "translate(30px, -50px) scale(1.1)",
                    },
                    "66%": {
                        transform: "translate(-20px, 20px) scale(0.9)",
                    },
                    "100%": {
                        transform: "translate(0px, 0px) scale(1)",
                    },
                },
                float: {
                    "0%, 100%": {
                        transform: "translateY(0)",
                    },
                    "50%": {
                        transform: "translateY(-20px)",
                    },
                },
            },
        },
    },
    plugins: [],
}
