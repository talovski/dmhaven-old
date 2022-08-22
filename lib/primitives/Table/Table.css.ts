import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../../styles/default.css';

export const tableCell = recipe({
	base: {
		padding: `${vars.space.space2} 0`,
		borderBottom: `solid 1px ${vars.colors.gray4}`,
		fontSize: vars.fontSize[3],
	},
	variants: {
		align: {
			start: {
				textAlign: 'start',
			},
			center: {
				textAlign: 'center',
			},
			end: {
				textAlign: 'end',
			},
		},
		border: {
			solid: {
				borderBottom: `1px solid ${vars.colors.gray4}`,
			},
			dashed: {
				borderBottom: `1px dashed ${vars.colors.gray8}`,
			},
		},
		defaultVariants: {
			align: 'start',
			border: 'solid',
		},
	},
});

export const tableRow = style({
	selectors: {
		'&:nth-child(odd)': {
			backgroundColor: vars.colors.gray2,
		},
	},
});

export const tableHeadCell = recipe({
	base: {
		fontSize: vars.fontSize[2],
		padding: `${vars.space.space2} 0`,
		color: vars.colors.gray11,
		borderBottom: `solid 1px ${vars.colors.gray4}`,
	},
	variants: {
		align: {
			start: {
				textAlign: 'start',
			},
			center: {
				textAlign: 'center',
			},
			end: {
				textAlign: 'end',
			},
		},
	},
	defaultVariants: {
		align: 'start',
	},
});

export const search = style({
	backgroundColor: vars.colors.gray1,
	borderBottom: `solid 1px ${vars.colors.gray4}`,
});

export const tr = style({
	paddingTop: vars.space.space1,
	paddingBottom: vars.space.space1,
});

export const table = style({
	width: '100%',
	overflowX: 'scroll',
	tableLayout: 'fixed',
	borderSpacing: 0,
});
