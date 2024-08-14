import type { Config } from "tailwindcss"

import { pixelShadesPlugin } from "@pixelshades/ui/tailwind"

const config: Config = {
	darkMode: ["class"],
	content: [
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"node_modules/@pixelshades/styles/dist/**/*.{mjs,js}",
	],
	theme: {
		extend: {},
	},
	plugins: [pixelShadesPlugin],
}

export default config
