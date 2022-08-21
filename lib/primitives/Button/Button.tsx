import { ReactNode } from 'react';
import { Flex } from '..';
import { button } from './Button.css';

type ButtonProps = {
	children: ReactNode;
	color: 'neutral' | 'brand' | 'accent';
	size: 'small' | 'medium' | 'large';
};

/**
 * Button with three variants
 */

export const Button = ({ children, color, size }: ButtonProps) => {
	return (
		<button
			type="button"
			className={button({
				color: color,
				size: size,
			})}
		>
      <Flex>
			  {children}
      </Flex>
		</button>
	);
};
