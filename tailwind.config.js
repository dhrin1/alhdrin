/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        colors: {
            black: {
                normal: '#000000',
                primary: '#0F0F0F'
            }
        },
        animation: {
            tilt: "tilt 10s infinite linear",
            blob: "blob 7s infinite",
            'gradient-x':'gradient-x 15s ease infinite',
            'gradient-y':'gradient-y 15s ease infinite',
            'gradient-xy':'gradient-xy 15s ease infinite',
        },
        keyframes: {
            tilt: {
            "0%, 50%, 100%": { transform: "rotate(0deg)", },
            "25%": { transform: "rotate(1deg)", },
            "75%": { transform: "rotate(-1deg)", },

            },
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
                  transform: "tranlate(0px, 0px) scale(1)",
                },
            },
            'gradient-y': {
                '0%, 100%': {
                    'background-size':'400% 400%',
                    'background-position': 'center top'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'center center'
                }
            },
            'gradient-x': {
                '0%, 100%': {
                    'background-size':'200% 200%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            },
            'gradient-xy': {
                '0%, 100%': {
                    'background-size':'400% 400%',
                    'background-position': 'left center'
                },
                '50%': {
                    'background-size':'200% 200%',
                    'background-position': 'right center'
                }
            }
        },
        },
    },
    plugins: [],
}
