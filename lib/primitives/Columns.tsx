import useSize from '@react-hook/size';
import { createElement, ReactNode, useRef } from 'react';

import { Atoms, atoms } from '../../styles/atoms.css';
import { breakpoints } from '../../styles/breakpoints';

type ColumnsProps = {
	as?: 'div' | 'span' | 'ol' | 'ul';
	space?: Atoms['gap'];
	collapseBelow?: keyof typeof breakpoints;
	align?: Atoms['justifyContent'];
	alignY?: Atoms['alignItems'];
	children: ReactNode;
	id?: string;
};

export function Columns({
	as = 'div',
	space = 'none',
	align = 'start',
	alignY = 'start',
	collapseBelow = 'mobile',
	children,
	id = '',
}: ColumnsProps) {
	const target = useRef(null);
	const [width] = useSize(target);
	console.log('width', width);
	let flexDirection: Atoms['flexDirection'] = 'row';
	let justifyContent: Atoms['justifyContent'] = align;
	let alignItems: Atoms['alignItems'] = alignY;
	let ref = null;

	console.log('collapsebelow', breakpoints[collapseBelow]);

	if (collapseBelow !== undefined) {
		if (width < breakpoints[collapseBelow]) {
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

	return createElement(as, { ref, className, id }, children);
}
