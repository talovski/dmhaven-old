import { Flex } from '../Flex';
import { checkboxRoot, checkboxIndicator } from './Checkbox.css';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { IconCheck } from '../../Icons';

type CheckboxProps = {
	value: string;
	checked: boolean;
	disabled?: boolean;
	onChange: (value: any) => void;
	labelText?: string;
	size: 'small' | 'large';
};

export const Checkbox = ({
	value,
	checked,
	disabled = false,
	onChange,
	labelText,
	size = 'large',
}: CheckboxProps) => (
	<Flex space={'space2'}>
		<CheckboxPrimitive.Root
			id={value}
			disabled={disabled}
			checked={checked}
			onCheckedChange={() => onChange(!checked)}
			value={value}
			name={value}
			className={checkboxRoot({ size: size })}
		>
			<CheckboxPrimitive.Indicator className={checkboxIndicator}>
				<IconCheck />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
		{!!labelText?.length && <label htmlFor={value}>{labelText}</label>}
	</Flex>
);
