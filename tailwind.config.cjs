/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			container:{
				center:true
			},
			colors:{
			'white':'#f8fafc',
			'maincolor':'rgb(10, 79, 190)',
			'submain':'rgb(36, 26, 53)',
			'black':'#0f172a',
			}
		},
	},
	plugins: [],
}
