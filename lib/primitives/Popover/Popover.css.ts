import { style } from '@vanilla-extract/css';
import { vars } from '../../../styles/default.css';

export const popoverTrigger = style({
	cursor: 'pointer',
	color: vars.colors.mauve12,
	backgroundColor: vars.colors.mauve3,
	border: vars.shadows.medium,
	padding: vars.space.space2,
	borderRadius: vars.radii[2],
	transition: vars.transitions.touchable,

	':hover': {
		backgroundColor: vars.colors.mauve5,
	},
});

export const openPopoverButton = style([
	popoverTrigger,
	{
		backgroundColor: vars.colors.mauve5,
	},
]);

export const popoverContent = style({
	padding: vars.space.space4,
	backgroundColor: vars.colors.mauve2,
	borderRadius: vars.radii[3],
	boxShadow: vars.shadows.large,
	transition: vars.transitions.fast,
	color: vars.colors.mauve10,
});

export const popoverArrow = style({
	backgroundColor: vars.colors.mauve2,
});
