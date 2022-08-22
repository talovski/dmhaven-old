import { createElement, ReactNode } from 'react';

import { vars } from '../../../styles/default.css';
import { textStyles } from './Text.css';

type Props = {
	children: ReactNode;
	as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span';
	size: typeof vars.fontSize['1'];
	color: 'red' | 'pink';
};

export const Text = ({ children, as = 'p', size, color = 'gray10' }: Props) => {
	let className = textStyles({ color: color, size: size });
	return createElement(as, { className }, children);
};
