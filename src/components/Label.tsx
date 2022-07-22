import { styled } from '@stitches/react';
import { ReactNode } from 'react';

type Props = {
	color: 'violet' | 'gray';
	children: ReactNode;
};
export const Label = ({ color, children }: Props) => (
	<StyledLabel color={color}>{children}</StyledLabel>
);

const StyledLabel = styled('button', {
	padding: '4px 8px',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	variants: {
		color: {
			violet: {
				backgroundColor: 'blueviolet',
				color: 'white',
				'&:hover': {
					backgroundColor: 'darkviolet'
				}
			},
			gray: {
				backgroundColor: 'gainsboro',
				'&:hover': {
					backgroundColor: 'lightgray'
				}
			}
		}
	}
});
