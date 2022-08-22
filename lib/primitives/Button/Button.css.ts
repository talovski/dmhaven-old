import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../../styles/default.css';

export const button = recipe({
	base: {
		padding: vars.space.space2,
		borderRadius: vars.radii[3],
		cursor: 'pointer',
	},
	variants: {
		color: {
			neutral: {
				background: vars.colors.mauve3,
				color: vars.colors.mauve12,

				':hover': {
					background: vars.colors.mauve4,
					boxShadow: vars.shadows.small,
				},

				':active': {
					transform: vars.transforms.touchable,
				},
			},
			brand: {
				background: 'blueviolet',
				color: vars.colors.violet12,
			},
			accent: {
				background: vars.colors.violet11,
				color: vars.colors.violet1,

				':hover': { background: vars.colors.violet9 },

				':active': {
					transform: vars.transforms.touchable,
				},

				selectors: {
					'&[data-state="open"], &[data-state="open"]': {
						background: vars.colors.violet9,
						transform: vars.transforms.touchable,
					},
				},
			},
		},
		size: {
			small: { padding: vars.space.space2, gap: vars.space.space2 },
			medium: { padding: vars.space.space4, gap: vars.space.space4 },
			large: { padding: vars.space.space6, gap: vars.space.space6 },
		},
	},
});
