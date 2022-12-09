/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				theme1: {
					primary: '#f4b89a',
					secondary: '#8ceab8',
					accent: '#7980ce',
					neutral: '#201825',
					'base-100': '#F5F4F5',
					info: '#4176D2',
					success: '#1B9D6F',
					warning: '#FAD161',
					error: '#F86374'
				},
				theme2: {
					primary: '#e06a53',
					secondary: '#79ff21',
					accent: '#c95262',
					neutral: '#2B2E3B',
					'base-100': '#FCFCFD',
					info: '#94A8E1',
					success: '#0D5E42',
					warning: '#F6B74C',
					error: '#E45149'
				},
				theme3: {
					primary: '#17beed',
					secondary: '#93f2d4',
					accent: '#f79f6c',
					neutral: '#1B1320',
					'base-100': '#EBEAEB',
					info: '#46A1EC',
					success: '#16B651',
					warning: '#F9CB67',
					error: '#DF4950'
				}
			}
		]
	}
};
