import { styled } from '../styles/stitches.config';
import { ReactNode } from 'react';

type Props = {
	size: 'h1' | 'h2' | 'h3';
	children: ReactNode;
};
export const Header = ({ size, children }: Props) => (
	<>
		{size === 'h1' && <StyledH1>{children}</StyledH1>}
		{size === 'h2' && <StyledH2>{children}</StyledH2>}
		{size === 'h3' && <StyledH3>{children}</StyledH3>}
	</>
);

const StyledH1 = styled('h1', {
	fontSize: '40px',
	lineHeight: '52px'
});

const StyledH2 = styled('h2', {
	fontSize: '32px',
	lineHeight: '40px'
});

const StyledH3 = styled('h3', {
	fontSize: '26px',
	lineHeight: '28px'
});
