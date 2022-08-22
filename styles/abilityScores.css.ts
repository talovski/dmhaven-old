import { style } from '@vanilla-extract/css';

import { vars } from './default.css';

export const spellLine = style({
	borderBottom: `solid 1px ${vars.colors.gray4}`,
	selectors: {
		'&:last-child': {
			borderBottom: 'none',
		},
	},
});
