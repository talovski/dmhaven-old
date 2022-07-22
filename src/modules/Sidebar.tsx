import { styled } from '../styles/stitches.config';
import { Categories } from '../types/Categories';
import { Link } from 'react-router-dom';

export const Sidebar = () => (
	<StyledSidebar>
		<h3>DM Haven</h3>
		{Categories.map((cat) => (
			<Link key={cat.index} to={`/wiki/${cat.index}`}>
				<StyledItem>{cat.text}</StyledItem>
			</Link>
		))}
	</StyledSidebar>
);

const StyledSidebar = styled('div', {
	position: 'fixed',
	top: 0,
	left: 0,
	padding: '$3',
	width: '248px',
	height: '100vh',
	overflow: 'scroll',
	textAlign: 'left'
	// backgroundColor: '$offwhite'
});

const StyledItem = styled('p', {
	color: '$offwhite',
	textDecorationThickness: '1px',
	textUnderlinePosition: 'under',
	textDecorationLine: 'underline',
	transition: '0.3s',
	cursor: 'pointer',

	'&:hover': {
		color: '$orange'
		// textDecorationColor: '$orage'
	}
});
