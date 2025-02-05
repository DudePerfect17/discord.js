import { defineConfig, presetTypography, presetUno } from 'unocss';

export default defineConfig({
	theme: {
		colors: {
			blurple: {
				50: '#e0e3ff',
				100: '#cdd2ff',
				200: '#9ea7ff',
				300: '#7782fa',
				DEFAULT: '#5865F2',
				500: '#3d48c3',
				600: '#293294',
				700: '#1a2165',
				800: '#0e1137',
				900: '#020208',
			},
		},
		fontFamily: {
			sans: 'var(--font-inter)',
			mono: 'var(--font-mono)',
		},
	},
	presets: [
		presetUno({ dark: 'class' }),
		presetTypography({
			cssExtend: {
				pre: {
					padding: '1em',
					'line-height': '1.5',
					'border-radius': '4px',
				},
				code: {
					'font-size': '1em',
					'font-weight': 'unset',
				},
				':where(:not(pre) > code)::before': {
					content: '""',
				},
				':where(:not(pre) > code)::after': {
					content: '""',
				},
				a: {
					color: '#5865F2',
					'text-decoration': 'none',
				},
				'a > img': {
					display: 'inline-block',
				},
				h1: {
					'scroll-margin-top': '6.5rem',
				},
				'.level-h1': {
					margin: '1rem 0',
				},
				h2: {
					'margin-top': '1.25em',
					'scroll-margin-top': '6.5rem',
				},
				'.level-h2': {
					margin: '1.25em 0',
				},
				h3: {
					'margin-top': '1.25em',
					'scroll-margin-top': '6.5rem',
				},
				'.level-h3': {
					margin: '1.25em 0',
				},
				h4: {
					'margin-top': '1.25em',
					'scroll-margin-top': '6.5rem',
				},
				'.level-h4': {
					margin: '1.25em 0',
				},
				// eslint-disable-next-line id-length
				p: {
					margin: '.5em 0',
				},
			},
		}),
	],
	include: [
		/.[jt]sx$/,
		/.mdx?$/,
		// eslint-disable-next-line prefer-named-capture-group, unicorn/no-unsafe-regex
		/.*\/ui\.js(.*)?$/,
		// eslint-disable-next-line prefer-named-capture-group, unicorn/no-unsafe-regex
		/.*\/ui\.mjs(.*)?$/,
	],
});
