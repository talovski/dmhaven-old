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
				background: 'whitesmoke',
				':hover': {
					background: 'red',
				},
			},
			brand: { background: 'blueviolet' },
			accent: { background: 'slateblue' },
		},
		size: {
			small: { padding: vars.space.space2, gap: vars.space.space2 },
			medium: { padding: vars.space.space4, gap: vars.space.space4 },
			large: { padding: vars.space.space6, gap: vars.space.space6 },
		},
	},
});
