import {
  ConditionalValue,
  createMapValueFn,
  createNormalizeValueFn,
  createSprinkles,
  defineProperties,
  RequiredConditionalValue,
} from '@vanilla-extract/sprinkles';

import { Breakpoint, breakpointNames, breakpoints } from './breakpoints';
import { vars } from './default.css';

export type Space = keyof typeof vars.space | 'none';

const responsiveProperties = defineProperties({
	defaultCondition: 'mobile',
	conditions: {
		mobile: {},
		tablet: {
			'@media': `screen and (min-width: ${breakpoints.tablet}px)`,
		},
		desktop: {
			'@media': `screen and (min-width: ${breakpoints.desktop}px)`,
		},
		wide: {
			'@media': `screen and (min-width: ${breakpoints.wide}px)`,
		},
	},
	responsiveArray: ['mobile', 'tablet', 'desktop', 'wide'],
	properties: {
		position: ['absolute', 'fixed', 'relative', 'static', 'sticky'],
		zIndex: {
			negative: -1,
			0: 0,
			1: 1,
			2: 2,
			dropdownBackdrop: 90,
			dropdown: 100,
			sticky: 200,
			modalBackdrop: 290,
			modal: 300,
			notification: 400,
		},
		top: [0, 20, 40, 'auto'],
		bottom: [0, 'auto'],
		border: ['solid 1px red'],
		left: [0, 'auto'],
		right: [0, 'auto'],
		display: ['none', 'flex', 'grid', 'block', 'inline', 'inline-flex'],
		flexDirection: ['column', 'row'],
		alignItems: {
			start: 'flex-start',
			center: 'center',
			end: 'flex-end',
			stretch: 'stretch',
		},
		justifyContent: {
			start: 'flex-start',
			center: 'center',
			end: 'flex-end',
			stretch: 'stretch',
		},
		flexWrap: ['wrap', 'nowrap'],
		flexGrow: {
			yes: 1,
			no: 0,
		},
		flexShrink: {
			yes: 1,
			no: 0,
		},
		flexBasis: {
			'1': '100%',
			'1/2': `${100 / 2}%`,
			'1/3': `${100 / 3}%`,
			'2/3': `${200 / 3}%`,
			'1/4': `${100 / 4}%`,
			'3/4': `${300 / 4}%`,
			'1/5': `${100 / 5}%`,
			'1/6': `${100 / 6}%`,
			'1/8': `${100 / 8}%`,
			'2/5': `${200 / 5}%`,
			'3/5': `${300 / 5}%`,
			'4/5': `${400 / 5}%`,
			'5/6': `${500 / 6}%`,
			'7/8': `${700 / 8}%`,
		},
		margin: vars.space,
		marginTop: vars.space,
		marginBottom: vars.space,
		marginLeft: vars.space,
		marginRight: vars.space,

		padding: vars.space,
		paddingTop: vars.space,
		paddingBottom: vars.space,
		paddingLeft: vars.space,
		paddingRight: vars.space,

		gap: vars.space,
		rowGap: vars.space,

		width: vars.dimensions,
		height: vars.dimensions,

		overflowX: ['scroll', 'auto'],
		overflowY: ['scroll', 'auto'],
	},
	shorthands: {
		marginX: ['marginLeft', 'marginRight'],
		marginY: ['marginTop', 'marginBottom'],

		paddingX: ['paddingLeft', 'paddingRight'],
		paddingY: ['paddingTop', 'paddingBottom'],
	},
});

export const atoms = createSprinkles(responsiveProperties);
export type Atoms = Parameters<typeof atoms>[0];
export const normalizeResponsiveValue = createNormalizeValueFn(responsiveProperties);

export type OptionalResponsiveValue<Value extends string | number> = ConditionalValue<
	typeof responsiveProperties,
	Value
>;

export type ResponsiveSpace = RequiredResponsiveValue<Space>;

export type RequiredResponsiveValue<Value extends string | number> = RequiredConditionalValue<
	typeof responsiveProperties,
	Value
>;

export type RequiredResponsiveObject<Value> = Partial<Record<Breakpoint, Value>> &
	Record<typeof breakpointNames[0], Value>;

export const mapResponsiveValue = createMapValueFn(responsiveProperties);
