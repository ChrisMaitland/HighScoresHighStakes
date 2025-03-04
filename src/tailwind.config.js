/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                playstationBlue: "#00439c", // PlayStation deep blue
                playstationLightBlue: "#0070d1", // A lighter PlayStation blue
                playstationDark: "#003087", // Darker PlayStation navy
                playstationWhite: "#ffffff", // Classic white
            },
        },
    },
    plugins: [],
};
