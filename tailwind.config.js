// tailwind.config.js
/ @type {import('tailwindcss').Config} */;
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screen: {
        sm: "540px",
      },
      colors: {
        "jv-white": "var(--whiteColor)",
        "jv-black": "var(--blackColor)",
        "jv-primary": "var(--primaryColor)",
        "jv-light": "var(--lightColor)",
        "jv-dark": "var(--darkColor)",
        "jv-danger": "var(--dangerColor)",
        "jv-success": "var(--successColor)",
        "jv-warning": "var(--warningColor)",
        "jv-blue": "var(--blueColor)",
      },
    },
  },
  plugins: [
    // ...
  ],
  corePlugins: {
    preflight: false, // <== disable this!
  },
};
