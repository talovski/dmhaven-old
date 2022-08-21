import { ReactNode } from 'react';
import { Box } from '../Box/Box';
import { badge } from './Badge.css';

type BadgeProps = {
	children: ReactNode;
	color?:
		| 'gray'
		| 'red'
		| 'crimson'
		| 'pink'
		| 'purple'
		| 'violet'
		| 'indigo'
		| 'blue'
		| 'cyan'
		| 'teal'
		| 'green'
		| 'lime'
		| 'yellow'
		| 'orange'
		| 'gold'
		| 'bronze';
    size?: 'small' | 'medium',
		cursor?: 'pointer' | 'default'
};

export const Badge = ({ children, color, size = 'small', cursor = 'default' }: BadgeProps) => (
	<Box
		customClassName={badge({
			color: color,
      size: size,
			cursor: cursor
		})}
	>
		{children}
	</Box>
);
