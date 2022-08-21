import React from 'react';
import { atoms, Atoms } from '../../styles/atoms.css';

type StackProps = {
	as?: 'div' | 'span' | 'ol' | 'ul';
	gap?: Atoms['gap'];
	align?: Atoms['alignItems'];
	children: React.ReactNode;
	padding?: Atoms['padding'];
};

export function Stack({
	as = 'div',
	gap = 'none',
	padding = 'none',
	align = 'stretch',
	children,
}: StackProps) {
	const className = atoms({
		display: 'flex',
		flexDirection: 'column',
		gap: gap,
		alignItems: align,
		padding: padding,
	});

	return React.createElement(as, { className }, children);
}
