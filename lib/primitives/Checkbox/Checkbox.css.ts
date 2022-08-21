import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../styles/default.css';

export const checkboxRoot = recipe({
	base: {
		all: 'unset',
		boxSizing: 'border-box',
		userSelect: 'none',
		alignItems: 'center',
		appearance: 'none',
		display: 'inline-flex',
		justifyContent: 'center',
		lineHeight: '1',
		margin: '0',
		outline: 'none',
		padding: '0',
		WebkitTapHighlightColor: 'rgba(0,0,0,0)',

		color: vars.colors.slate12,
		boxShadow: `inset 0 0 0 1px ${vars.colors.slate10}`,
		overflow: 'hidden',
		':hover': {
			boxShadow: `inset 0 0 0 2px ${vars.colors.slate10}`,
		},
		':focus': {
			outline: 'none',
			borderColor: vars.colors.red7,
			boxShadow: `inset 0 0 0 1px ${vars.colors.blue9}, 0 0 0 1px ${vars.colors.blue9}`,
		},
		':disabled': {
			boxShadow: `inset 0 0 0 1px ${vars.colors.slate7}`,
			cursor: 'not-allowed'
		}
	},
	variants: {
    size: {
      small: {
        width: '15px',
        height: '15px',
        borderRadius: '4px',
      },
      large: {
        width: '25px',
        height: '25px',
        borderRadius: '6px',
      },
    }
	},
});

export const checkboxIndicator = style({
	alignItems: 'center',
	display: 'flex',
	height: '100%',
	justifyContent: 'center',
	width: '100%',
  color: vars.colors.slate12,
});
