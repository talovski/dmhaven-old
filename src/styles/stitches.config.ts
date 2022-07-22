import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } =
	createStitches({
		theme: {
			colors: {
				navy: '#3e5f72',
				lightNavy: '#C7D3DD',
				mustard: '#E8DCB9',
				orange: '#F06449',
				offwhite: '#EDE6E3',
				grey: '#DADAD9',
				green: '#2d6130'
			},
			space: {
				1: '8px',
				2: '16px',
				3: '24px',
				4: '32px',
				5: '40px',
				6: '48px'
			},
			fonts: {
				spectral: 'Spectral, serif'
			},
			radii: {
				1: '2px',
				2: '4px',
				3: '8px',
				0: '50%'
			}
		},
		utils: {
			m: (value: string) => ({
				margin: value
			}),
			my: (value: string) => ({
				marginTop: value,
				marginBottom: value
			}),
			mx: (value: string) => ({
				marginLeft: value,
				marginRight: value
			}),
			p: (value: string) => ({
				padding: value
			}),
			py: (value: string) => ({
				paddingTop: value,
				paddingBottom: value
			}),
			px: (value: string) => ({
				paddingLeft: value,
				paddingRight: value
			}),
			flex: () => ({
				display: 'flex'
			}),
			flexCenter: () => ({
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center'
			}),
			br: (value: string) => ({
				borderRadius: value
			}),
			brTop: (value: string) => ({
				borderTopLeftRadius: value,
				borderTopRightRadius: value
			}),
			brBottom: (value: string) => ({
				borderBottomLeftRadius: value,
				borderBottomRightRadius: value
			})
		}
	});

const darkTheme = createTheme('dark-theme', {
	colors: {
		primary: '#e3e3e4',
		secondary: 'AEB7B3',
		background: '#242424'
	}
});
