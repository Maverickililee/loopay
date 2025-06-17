/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
        nunito: ['Nunito', 'sans-serif'],
      titr: ['titr']
    },
    extend: {
      colors: {
        mainBlue: "#3366FF",
        darkBlue: "#002b97",
        textColor: "#030304",
        subText: "#c1c3c2",
      },

      screens: {
        com: { min: "990px" },
        tablet: { max: "990px" },
        dd: { max: "700px" },
        des: { max: "1000px" },
        sd: { max: "500px" },
        ss: { max: "400px" },
        mobile: {
          max: "748px",
        },
        desktop: {
          max: "1200px",
        },
      },
    },
  },
  plugins: [

  ],
};
