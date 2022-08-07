import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu';
import styled from 'astroturf/react';

export const DropdownRoot = DropdownPrimitive.Root;

export const DropdownCheckboxItem = DropdownPrimitive.CheckboxItem;
export const DropdownItemIndicator = DropdownPrimitive.ItemIndicator;

export const DropdownTrigger = styled(DropdownPrimitive.Trigger)`
	all: unset;
	padding: 4px 8px;
	background-color: var(--color-off-white);
	border-radius: 4px;
	transition: 0.1s;

	&:hover {
		background-color: var(--color-beige-light);
	}

	&[data-state='open'] {
		background-color: var(--color-beige-light);
	}
`;

export const DropdownContent = styled(DropdownPrimitive.Content)`
	padding: 8px 16px;
	background-color: var(--color-purple-500);
	border-radius: 4px;
	color: var(--color-beige-light);
`;
