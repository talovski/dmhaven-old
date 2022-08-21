import { globalFontFace, globalStyle, style } from '@vanilla-extract/css';
import { vars } from './default.css';

globalFontFace('Kurbanistika', {
	src: 'url("https://cdn.jsdelivr.net/gh/talovsky/kurbanistika@main/kurbanistika.woff2") format("woff2")',
});

export const main = style({
	backgroundColor: vars.colors.mauve1,
	color: vars.colors.mauve12,
});

globalStyle('html, body', {
	all: 'unset',
	boxSizing: 'border-box',
	fontFamily: vars.fontFace.ibm,
	fontSize: vars.fontSize[4],
	MozOsxFontSmoothing: 'greyscale',
	WebkitFontSmoothing: 'antialiased',
	fontSynthesis: 'none',
	textRendering: 'optimizeLegibility',
	WebkitTextSizeAdjust: '100%',
});

globalStyle('*', {
	transition: 'background-color 0.1s',
});

globalStyle('button', {
	all: 'unset',
	fontFamily: 'inherit',
	border: 'none',
});

globalStyle('a', {
	all: 'unset',
});

globalStyle('h1, h2, h3, h4, h5, h6, p', {
	margin: 0,
});
