/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
        "./app/**/*.php",
    ],
    theme: {
        extend: {},
    },

    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                halloween: {
                    ...require("daisyui/src/theming/themes")[
                        "[data-theme=halloween]"
                    ],
                    primary: "#F56E01",
                    "primary-content": "white",
                },
            },
        ],
    },
};
