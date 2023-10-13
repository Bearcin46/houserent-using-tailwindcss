/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'color-patten':"linear-gradient(to_right_bottom,rgba(49,84,44,0.8),rgba(16,71,52,0.8)), url('/public/images/banner.jpg')",
        'hero-pattern': " url('/public/images/banner.jpg')",
     },
    },
  },
  plugins: [],
}
