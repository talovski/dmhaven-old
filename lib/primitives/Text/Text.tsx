import { createElement, ReactNode } from 'react';

import { textStyles } from './Text.css';

type Props = {
	children: ReactNode;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
	size?: 'p' | 'p2' | 'h1' | 'h2' | 'h3';
	gradient?: boolean;
	color?:
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
		| 'bronze'
		| 'gray'
		| 'default';
};

export const Text = ({
	children,
	as = 'p',
	gradient = false,
	size = 'p',
	color = 'default',
}: Props) => {
	const className = textStyles({ color: color, size: size, gradient: gradient });

	return createElement(as, { className }, children);
};
