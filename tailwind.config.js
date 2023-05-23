/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				comic: ["Comic Neue", "cursive"],
				electrolize: ["Kampung Orange", "sans-serif"],
			},

			keyframes: {
				typing: {
					"0%": {
						width: "0%",
						visibility: "hidden",
					},
					"100%": {
						width: "105%",
					},
				},
				wiggle: {
					"0%, 100%": { transform: "rotate(-5deg)" },
					"50%": { transform: "rotate(5deg)" },
				},
				blink: {
					"50%": {
						borderColor: "transparent",
					},
					"100%": {
						borderColor: "#0A4D68",
					},
				},
			},
			animation: {
				typing: "typing 5s steps(20) infinite alternate, blink .7s infinite",
			},
		},
		screens: {
			xl: { max: "1600px" },
			lg: { max: "1400px" },
			md: { max: "1064px" },
			sm: { max: "639px" },
		},
		colors: {
			blue: "#009FBD",
			white: "#ffffff",
			purple: "#7e5bef",
			pink: "#ff49db",
			red: "#E74646",
			"red-lite": "#9d174dcc",
			orange: "#ff7849",
			"orange-lite": "#FFA45B",
			green: "#5F8D4E",
			yellow: "#ffc82c",
			"grey-dark": "#273444",
			gray: "#8492a6",
			"grey-light": "#FEFBF3",
			black: "#0f0e13",
			teal: "#088395",
			sky: "#05BFDB",
			"blue-dark": "#0A4D68",
		},
	},
	plugins: [],
};
