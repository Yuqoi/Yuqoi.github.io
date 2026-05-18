module.exports = {
    content: ["./assets/css/*.css", "./layouts/**/*.html", "./content/**/*.md", "./public/**.html"],
    theme: {
        extend: {
        }
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
}
