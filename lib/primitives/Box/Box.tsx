import classNames from 'classnames';
import React, { createElement } from 'react';

import { Atoms, atoms } from '../../../styles/atoms.css';

type HTMLElement =
	| 'div'
	| 'tr'
	| 'td'
	| 'thead'
	| 'main'
	| 'aside'
	| 'article'
	| 'nav'
	| 'footer'
	| 'span'
	| 'details'
	| 'section';

type BoxProps = Atoms & {
	as?: HTMLElement;
	children: React.ReactNode;
	customClassName?: string;
	id?: string;
};

/**
 * Basic component which can recieve all sprinkles as props. Building block for other primitives
 */

export const Box = ({
	as = 'div',
	id = '',
	children,
	customClassName = '',
	...props
}: BoxProps) => {
	const className = classNames(atoms({ ...props }), customClassName);
	return createElement(as, { className, id }, children);
};
