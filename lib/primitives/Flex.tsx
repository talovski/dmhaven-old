import { atoms, Atoms } from '../../styles/atoms.css';
import useSize from '@react-hook/size';
import React from 'react';
import classNames from 'classnames';

type FlexProps = {
	as?: 'div' | 'span' | 'ol' | 'ul';
	space?: Atoms['gap'];
	collapseBelow?: number;
	align?: Exclude<Atoms['justifyContent'], 'stretch'>;
	alignY?: Exclude<Atoms['alignItems'], 'stretch'>;
	children: React.ReactNode;
	externalClassName?: string;
	wrap?: Atoms['flexWrap']
};

export const Flex = ({
	as = 'div',
	space = 'none',
	align = 'start',
	alignY = 'center',
	wrap = 'wrap',
	collapseBelow,
	children,
	externalClassName,
}: FlexProps) => {
	const target = React.useRef(null);
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

	const internalClassName = atoms({
		display: 'flex',
		flexDirection,
		flexWrap: wrap,
		gap: space,
		justifyContent,
		alignItems,
	});

	const className = classNames(internalClassName, externalClassName)

	return React.createElement(as, { ref, className }, children);
};
