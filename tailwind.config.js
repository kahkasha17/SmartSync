/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',    // Look for classes in all HTML files in the root directory
    './src/**/*.html',  // Look for classes in all HTML files in the `src` directory (if you have a folder)
    './src/**/*.js',    // Look for classes in any JS files within the `src` directory
  ],
 // darkMode: 'class', // or 'media' if you prefer automatic detection

  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

