/** @type {import('tailwindcss').Config} */
export default {
content: [
"./app/**/*.{js,jsx,ts,tsx}",
"./components/**/*.{js,jsx,ts,tsx}"
],
theme: {
extend: {
colors: {
brand: {
50: '#e8fbfb',
100: '#cdf7f7',
200: '#a0eeee',
300: '#6fe3e3',
400: '#42d3d3',
500: '#1ebcbc',
600: '#167a7a', // primary we used before
700: '#115e5e',
800: '#0d4a4a',
900: '#0a3d3d'
},
cream: '#fff9f0',
heroTint: '#b8f2e3' // as requested earlier
},
boxShadow: {
soft: '0 8px 30px rgba(0,0,0,0.06)'
},
borderRadius: {
xl2: '1.25rem'
}
}
},
plugins: []
};