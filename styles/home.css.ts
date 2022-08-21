import { style } from '@vanilla-extract/css';
import { vars } from './default.css';
export const popoverButton = style({
	cursor: 'pointer',
	color: vars.colors.mauve12,
	backgroundColor: vars.colors.mauve3,
	border: vars.shadows.large,
	padding: vars.space.space2,
	borderRadius: vars.radii[3],
	transition: vars.transitions.touchable,
	':hover': {
		backgroundColor: vars.colors.mauve5,
	},
});

export const openPopoverButton = style([popoverButton, {
	backgroundColor: vars.colors.mauve5	
}])

export const popoverContent = style({
	marginTop: vars.space.space1,
	padding: vars.space.space2,
	backgroundColor: vars.colors.mauve2,
	borderRadius: vars.radii[3],
	width: vars.dimensions.space6,
	boxShadow: vars.shadows.large,
	transition: vars.transitions.fast,
	color: vars.colors.mauve8
});


export const bgImgWrapper = style({
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100vw',
	height: '100vh'
})