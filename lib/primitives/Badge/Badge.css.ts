import { recipe } from '@vanilla-extract/recipes';
import { vars } from '../../../styles/default.css';

export const badge = recipe({
	base: {
		alignItems: 'center',
		appearance: 'none',
		borderWidth: '0',
		boxSizing: 'border-box',
		display: 'inline-flex',
		flexShrink: 0,
		fontFamily: 'inherit',
		justifyContent: 'center',
		lineHeight: '1',
		verticalAlign: 'middle',
		outline: 'none',
		padding: '0',
		textDecoration: 'none',
		userSelect: 'none',
		WebkitTapHighlightColor: 'rgba(0,0,0,0)',
		backgroundColor: vars.colors.slate3,
		borderRadius: vars.radii.pill,
		color: vars.colors.slate11,
		whiteSpace: 'nowrap',
		fontVariantNumeric: 'tabular-nums',

		':disabled': {
			backgroundColor: vars.colors.slate3,
			pointerEvents: 'none',
			color: vars.colors.slate8,
		},
	},
	variants: {
		color: {
			gray: {
				backgroundColor: vars.colors.slate3,
				color: vars.colors.slate11,
        ':hover': {
          backgroundColor: vars.colors.slate4
				},
				':focus': {
					boxShadow: `inset 0 0 0 1px ${vars.colors.slate8}, 0 0 0 1px ${vars.colors.slate8}`,
				},
			},
			red: {
				backgroundColor: vars.colors.red3,
				color: vars.colors.red11,
				':focus': {
					boxShadow: `inset 0 0 0 1px ${vars.colors.red8}, 0 0 0 1px ${vars.colors.red8}`,
				},
			},
			crimson: {
				backgroundColor: vars.colors.crimson3,
				color: vars.colors.crimson11,
				':focus': {
					boxShadow: `inset 0 0 0 1px ${vars.colors.crimson8}, 0 0 0 1px ${vars.colors.crimson8}`,
				},
			},
			pink: {
				backgroundColor: '$pink3',
				color: '$pink11',
				':focus': {
					boxShadow: 'inset 0 0 0 1px $colors$pink8, 0 0 0 1px $colors$pink8',
				},
			},
			purple: {
				backgroundColor: '$purple3',
				color: '$purple11',
				':focus': {
					boxShadow: 'inset 0 0 0 1px $colors$purple8, 0 0 0 1px $colors$purple8',
				},
			},
			violet: {
				backgroundColor: vars.colors.violet3,
				color: vars.colors.violet11,
				':focus': {
					boxShadow: `inset 0 0 0 1px ${vars.colors.violet8}, 0 0 0 1px ${vars.colors.violet8}`,
				},
			},
			indigo: {
				backgroundColor: '$indigo3',
				color: '$indigo11',
				':focus': {
					boxShadow: 'inset 0 0 0 1px $colors$indigo8, 0 0 0 1px $colors$indigo8',
				},
			},
			blue: {
				backgroundColor: '$blue3',
				color: '$blue11',
				':focus': {
					boxShadow: 'inset 0 0 0 1px $colors$blue8, 0 0 0 1px $colors$blue8',
				},
			},
			cyan: {
				backgroundColor: '$cyan3',
				color: '$cyan11',
				':focus': {
					boxShadow: 'inset 0 0 0 1px $colors$cyan8, 0 0 0 1px $colors$cyan8',
				},
			},
			teal: {
				backgroundColor: '$teal3',
				color: '$teal11',
				':focus': {
					boxShadow: 'inset 0 0 0 1px $colors$teal8, 0 0 0 1px $colors$teal8',
				},
			},
			green: {
				backgroundColor: '$green3',
				color: '$green11',
				':focus': {
					boxShadow: 'inset 0 0 0 1px $colors$green8, 0 0 0 1px $colors$green8',
				},
			},
			lime: {
				backgroundColor: '$lime3',
				color: '$lime11',
				':focus': {
					boxShadow: 'inset 0 0 0 1px $colors$lime8, 0 0 0 1px $colors$lime8',
				},
			},
			yellow: {
				backgroundColor: '$yellow3',
				color: '$yellow11',
				':focus': {
					boxShadow: 'inset 0 0 0 1px $colors$yellow8, 0 0 0 1px $colors$yellow8',
				},
			},
			orange: {
				backgroundColor: '$orange3',
				color: '$orange11',
				'&:focus': {
					boxShadow: 'inset 0 0 0 1px $colors$orange8, 0 0 0 1px $colors$orange8',
				},
			},
			gold: {
				backgroundColor: vars.colors.gold3,
				color: vars.colors.gold11,
				':focus': {
					boxShadow: `inset 0 0 0 1px ${vars.colors.gold8}, 0 0 0 1px ${vars.colors.gold8}`,
				},
			},
			bronze: {
				backgroundColor: vars.colors.bronze3,
				color: vars.colors.bronze11,
				':focus': {
					boxShadow: `inset 0 0 0 1px ${vars.colors.bronze8}, 0 0 0 1px ${vars.colors.bronze8}`,
				},
			},
		},
    size: {
      small: {
        height: vars.space.space3,
        padding: vars.space.space2,
        // paddingY: vars.space.space1,
        fontSize: vars.fontSize[2]
      },
      medium: {
        height: vars.space.space4,
        padding: vars.space.space3,
        fontSize: vars.fontSize[4]
      }
    },
    cursor: {
      pointer: {
        cursor: 'pointer'
      },
      default: {
        cursor: 'default'
      }
    }
	},
});
