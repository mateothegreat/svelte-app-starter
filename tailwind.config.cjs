/** @type {import('tailwindcss').Config} */
const config = {
	darkMode: ["class"],
	content: ["./src/**/*.{html,js,svelte,ts}"],
	safelist: ["dark"],
	theme: {
		extend: {
			borderRadius: {},
			colors: {
				brand: "rgba(119, 4, 251, 1)",
				"grey-grey-900": "#202326",
				"grey-grey-1000": "#101113",
				"blue-blue-500": "#1b85f3",
				"grey-white": "#ffffff",
				"grey-grey-800": "#39434f",
				"grey-grey-200": "#d9dfe6",
				"blue-blue-100": "#d1e6ff",
				"grey-grey-400": "#b3becd",
				"grey-grey-300": "#c6ced9"
			},
			spacing: {},
			width: {},
			minWidth: {},
			maxWidth: {},
			height: {},
			minHeight: {},
			maxHeight: {}
		}
	}
};

export default config;
