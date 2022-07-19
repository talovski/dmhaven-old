import { styled } from '../../styles/stitches.config';
import { Outlet } from 'react-router-dom';

export const Wiki = () => (
	<StyledWiki>
		<Outlet />
	</StyledWiki>
);

const StyledWiki = styled('div', {
	marginLeft: '268px'
});
