import { ReactNode } from 'react';
import { atoms, Atoms } from '../../styles/atoms.css';
import { Box } from './Box/Box';

type ColumnProps = {
	width?: Atoms['flexBasis'] | 'fluid' | 'content';
	children: ReactNode;
};

export function Column({ width = 'fluid', children }: ColumnProps) {
	let className = atoms({ display: 'flex', gap: 'space2'});

	if (width === 'fluid') {
		className = atoms({
			width: 'full',
		});
	} else if (width === 'content') {
		className = atoms({
			flexGrow: 'no',
			flexShrink: 'yes',
		});
	} else {
		className = atoms({
			flexGrow: 'no',
			flexShrink: 'no',
			flexBasis: width,
		});
	}

	return <Box customClassName={className}>{children}</Box>;
}
