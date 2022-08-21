import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../../styles/default.css';

export const textLink = recipe({
	base: {
		alignItems: 'center',
		gap: vars.space.space1,
		flexShrink: 0,
		outline: 'none',
		textDecorationLine: 'none',
		textUnderlineOffset: '3px',
		textDecorationColor: vars.colors.slate4,
		WebkitTapHighlightColor: 'rgba(0,0,0,0)',
		lineHeight: 'inherit',
		cursor: 'pointer',

		':hover': {
			textDecorationLine: 'underline',
		},

		':focus': {
			outlineWidth: '2px',
			outlineStyle: 'solid',
			outlineOffset: '2px',
			textDecorationLine: 'none',
		},
	},
	variants: {
		color: {
			blue: {
				color: vars.colors.blue11,
				textDecorationColor: vars.colors.blue4,

				':focus': {
					outlineColor: vars.colors.blue8,
				},
			},
			subtle: {
				color: vars.colors.slate11,
				textDecorationColor: vars.colors.slate4,

				':focus': {
					outlineColor: vars.colors.slate8,
				},
			},
			contrast: {
				color: vars.colors.slate12,
				textDecoration: 'underline',
				textDecorationColor: vars.colors.slate4,

				':hover': {
					textDecorationColor: vars.colors.slate7,
				},

				':focus': {
					outlineColor: vars.colors.slate8,
				},
			},
		},
		size: {
			small: {
				fontSize: vars.fontSize[3],
			},
			medium: {
				fontSize: vars.fontSize[4],
			},
			large: {
				fontSize: vars.fontSize[5],
			},
		},
		accented: {
			true: {
				':hover': {
					fontFamily: vars.fontFace.accent,
					textTransform: 'lowercase',
					fontSize: vars.fontSize[6],
					lineHeight: 1.05,
				},
			},
		},
		active: {
			true: {
				fontFamily: vars.fontFace.accent,
				textTransform: 'lowercase',
				fontSize: vars.fontSize[6],
				lineHeight: 1.05,
				color: vars.colors.violet11
			},
		},
		padding: {
			true: {
				height: vars.space.space3
			}
		}
	},
	defaultVariants: {
		color: 'contrast',
		size: 'medium',
	},
});
