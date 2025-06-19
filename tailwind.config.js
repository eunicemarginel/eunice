/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            animation: {
                fall: 'fall 4s linear infinite',
            },
            keyframes: {
                fall: {
                    '0%': { transform: 'translateY(-50px)', opacity: '0' },
                    '100%': { transform: 'translateY(100vh)', opacity: '0.9' },
                },
            },
        },
    },
    plugins: [],
}
