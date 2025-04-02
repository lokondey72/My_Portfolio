const config = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        zoomIn: "zoomIn 0.5s ease-in-out",
      },
      keyframes: {
        zoomIn: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.1)",
          },
        },
      },
    },
  },
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
export default config;
