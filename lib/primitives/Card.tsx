import { ReactNode } from 'react';
import { Box } from './Box/Box';

export const Card = ({
	as = 'div',
	children,
}: {
	as: 'div' | 'article' | 'aside' | 'details' | 'main' | 'section';
	children: ReactNode;
}) => {
  return <Box as={as} justifyContent={{
    desktop: 'center'
  }}>{children}</Box>
};
