import { createElement, CSSProperties, ReactNode } from 'react';
import { atoms, Atoms } from '../../styles/atoms.css';

type GridProps = {
	as?: 'div' | 'section' | 'ul' | 'ol';
	space?: Atoms['gap'];
	spaceY?: Atoms['gap'];
	minItemWidth: number;
	children: ReactNode;
};

export function Grid({
	as = 'div',
	space = 'none',
	spaceY = 'none',
	minItemWidth,
	children,
}: GridProps) {
	const className = atoms({
		display: 'grid',
		gap: space,
		rowGap: spaceY,
	});

	const style: CSSProperties = {
		gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, ${minItemWidth}px), 1fr))`,
	};

	return createElement(as, { className, style }, children);
}
