import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { styled } from '../styles/stitches.config';

export const Checkbox = CheckboxPrimitive.Root;
export const CheckboxIndicator = styled(CheckboxPrimitive.CheckboxIndicator, {
	height: '12px',
	width: '12px'
});
