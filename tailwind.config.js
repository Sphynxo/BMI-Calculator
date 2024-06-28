/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add your custom font here
      },
      colors: {
        blue: "#345FF6",
        gunmetal: "#253347",
        "dark-electric": "#5E6E85",
        borders: "#D8E2E7",
      },

      fontSize: {
        "heading-xl": "6.4rem",
        "heading-l": "4.8rem",
        "heading-m": "2.4rem",
        "heading-s": "2rem",
        "body-m": "1.6rem",
        "body-s": "1.4rem",
      },

      backgroundImage: {
        "custom-gradient":
          "linear-gradient(290deg, #D6E6FE 0%, rgba(214, 252, 254, 0.00) 100%)",
      },

      boxShadow: {
        'custom': '16px 32px 56px 0px rgba(143, 174, 207, 0.25)',
      },
    },
  },
  plugins: [],
};
