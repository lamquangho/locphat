/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./public/index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
        container: {
            center: true,
            padding: "1rem",
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1200px"
            }
        },
        extend: {
            colors: {
                primary: "#667eea",
                secondary: "#764ba2"
            }
        }
    },
    plugins: []
};