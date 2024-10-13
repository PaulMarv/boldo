import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared-components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      clipPath: {
        'custom-quadrant': 'polygon(0 0, 100% 0, 100% 100%, 50% 100%)',
      },
      colors: {
        primary: "#0A2640",
        secondary: "#65E4A3"
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'Open Sans', 'sans-serif'],
        sansMedium: ['var(--font-open-sans-medium)', 'Open Sans', 'sans-serif'],
        sansBold: ['var(--font-open-sans-bold)', 'Open Sans', 'sans-serif'],
        sansExtraBold: ['var(--font-open-sans-extra-bold)', 'Open Sans', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
      },
    },
    container:{
      center: true,
      padding:{
        DEFAULT:'50px',
        md:'75px',
        lg:'100px'
      }
    }
  },
  plugins: [],
};
export default config;
