import { recipe } from '@vanilla-extract/recipes';

import { vars } from '../../../styles/default.css';

export const textStyles = recipe({
	base: {
		lineHeight: 1,
		margin: 0,
		fontWeight: 400,
		fontVariantNumeric: 'tabular-nums',
		display: 'flex',
	},
	variants: {
		size: {
			'1': {
				fontSize: vars.fontSize[1],
			},
			'2': {
				fontSize: vars.fontSize[2],
			},
			'3': {
				fontSize: vars.fontSize[3],
			},
			'4': {
				fontSize: vars.fontSize[4],
			},
			'5': {
				fontSize: vars.fontSize[5],
				letterSpacing: '-.015em',
			},
			'6': {
				fontSize: vars.fontSize[6],
				letterSpacing: '-.016em',
			},
			'7': {
				fontSize: vars.fontSize[7],
				letterSpacing: '-.031em',
				textIndent: '-.005em',
			},
			'8': {
				fontSize: vars.fontSize[8],
				letterSpacing: '-.034em',
				textIndent: '-.018em',
			},
			'9': {
				fontSize: vars.fontSize[9],
				letterSpacing: '-.055em',
				textIndent: '-.025em',
			},
		},
		color: {
			red: { color: vars.colors.red11 },
			crimson: { color: vars.colors.crimson11 },
			pink: { color: vars.colors.pink11 },
			purple: { color: vars.colors.purple11 },
			violet: { color: vars.colors.violet11 },
			indigo: { color: vars.colors.indigo11 },
			blue: { color: vars.colors.blue11 },
			cyan: { color: vars.colors.cyan11 },
			teal: { color: vars.colors.teal11 },
			green: { color: vars.colors.green11 },
			lime: { color: vars.colors.lime11 },
			yellow: { color: vars.colors.yellow11 },
			orange: { color: vars.colors.orange11 },
			gold: { color: vars.colors.gold11 },
			bronze: { color: vars.colors.bronze11 },
			gray: { color: vars.colors.gray11 },
		},
		gradient: {
			true: {
				WebkitBackgroundClip: 'text',
				WebkitTextFillColor: 'transparent',
			},
		},
	},
	compoundVariants: [
		{
			variants: {
				color: 'red',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.red11}, ${vars.colors.crimson11})`,
			},
		},
		{
			variants: {
				color: 'crimson',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.red11}, ${vars.colors.crimson11})`,
			},
		},
		{
			variants: {
				color: 'pink',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.pink11}, ${vars.colors.purple11})`,
			},
		},
		{
			variants: {
				color: 'purple',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.purple11}, ${vars.colors.violet11})`,
			},
		},
		{
			variants: {
				color: 'violet',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.violet11}, ${vars.colors.indigo11})`,
			},
		},
		{
			variants: {
				color: 'indigo',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.indigo11}, ${vars.colors.blue11})`,
			},
		},
		{
			variants: {
				color: 'blue',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.blue11}, ${vars.colors.cyan11})`,
			},
		},
		{
			variants: {
				color: 'cyan',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.cyan11}, ${vars.colors.teal11})`,
			},
		},
		{
			variants: {
				color: 'teal',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.teal11}, ${vars.colors.green11})`,
			},
		},
		{
			variants: {
				color: 'green',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.green11}, ${vars.colors.lime11})`,
			},
		},
		{
			variants: {
				color: 'lime',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.lime11}, ${vars.colors.yellow11})`,
			},
		},
		{
			variants: {
				color: 'yellow',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.yellow11}, ${vars.colors.orange11})`,
			},
		},
		{
			variants: {
				color: 'orange',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.orange11}, ${vars.colors.red11})`,
			},
		},
		{
			variants: {
				color: 'gold',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.gold11}, ${vars.colors.gold9})`,
			},
		},
		{
			variants: {
				color: 'bronze',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.bronze11}, ${vars.colors.bronze9})`,
			},
		},
		{
			variants: {
				color: 'gray',
				gradient: true,
			},
			style: {
				background: `linear-gradient(to right, ${vars.colors.gray11}, ${vars.colors.gray12})`,
			},
		},
	],
	defaultVariants: {
		size: '3',
		color: 'gray',
	},
});
