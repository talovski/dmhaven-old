import useSize from '@react-hook/size';
import { createElement, ReactNode, useRef } from 'react';
import { atoms, Atoms } from '../../styles/atoms.css';

type ColumnsProps = {
	as?: 'div' | 'span' | 'ol' | 'ul';
	space?: Atoms['gap'];
	collapseBelow?: number;
	align?: Atoms['justifyContent'];
	alignY?: Atoms['alignItems'];
	children: ReactNode;
};

export function Columns({
	as = 'div',
	space = 'none',
	align = 'start',
	alignY = 'start',
	collapseBelow,
	children,
}: ColumnsProps) {
	const target = useRef(null);
	const [width] = useSize(target);

	let flexDirection: Atoms['flexDirection'] = 'row';
	let justifyContent: Atoms['justifyContent'] = align;
	let alignItems: Atoms['alignItems'] = alignY;
	let ref = null;

	if (collapseBelow !== undefined && typeof collapseBelow === 'number') {
		if (width < collapseBelow) {
			flexDirection = 'column';
			justifyContent = alignY;
			alignItems = align;
		}

		ref = target;
	}

	const className = atoms({
		display: 'flex',
		flexDirection,
		gap: space,
		justifyContent,
		alignItems,
	});

	return createElement(as, { ref, className }, children);
}
