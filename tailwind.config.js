/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }  
        },
        blink: {
          "25%": {
            borderColor: "transparent"
          },
          "50%": {
            borderColor: "white"
          } , 
          "100%":{
           borderColor: "transparent"
          }
        }
      },
      animation: {
        typing: "typing 7s steps(100) infinite alternate, blink .8s infinite"
      }
    },
  },
  plugins: [],
}
