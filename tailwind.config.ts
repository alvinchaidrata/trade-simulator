import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/ui/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				dark: '#212529',
				light: '#f8f9fa',
				success: '#9cc5a1',
				error: '#f25f5c',
			},
		},
	},
	plugins: [],
}
export default config
