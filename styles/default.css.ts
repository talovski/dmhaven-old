import { createGlobalTheme, createTheme } from '@vanilla-extract/css';
import * as colorPalette from '@radix-ui/colors';
import { calc } from '@vanilla-extract/css-utils';

const px = (value: string | number) => `${value}px`;

const grid = 4;

export const lightColors = {
	...colorPalette.amber,
	...colorPalette.amberA,
	...colorPalette.blackA,
	...colorPalette.blue,
	...colorPalette.blueA,
	...colorPalette.bronze,
	...colorPalette.bronzeA,
	...colorPalette.brown,
	...colorPalette.brownA,
	...colorPalette.crimson,
	...colorPalette.crimsonA,
	...colorPalette.cyan,
	...colorPalette.cyanA,
	...colorPalette.gold,
	...colorPalette.goldA,
	...colorPalette.grass,
	...colorPalette.grassA,
	...colorPalette.gray,
	...colorPalette.grayA,
	...colorPalette.green,
	...colorPalette.greenA,
	...colorPalette.indigo,
	...colorPalette.indigoA,
	...colorPalette.lime,
	...colorPalette.limeA,
	...colorPalette.mauve,
	...colorPalette.mauveA,
	...colorPalette.mint,
	...colorPalette.mintA,
	...colorPalette.olive,
	...colorPalette.oliveA,
	...colorPalette.orange,
	...colorPalette.orangeA,
	...colorPalette.pink,
	...colorPalette.pinkA,
	...colorPalette.plum,
	...colorPalette.plumA,
	...colorPalette.purple,
	...colorPalette.purpleA,
	...colorPalette.red,
	...colorPalette.redA,
	...colorPalette.sage,
	...colorPalette.sageA,
	...colorPalette.sand,
	...colorPalette.sandA,
	...colorPalette.sky,
	...colorPalette.skyA,
	...colorPalette.slate,
	...colorPalette.slateA,
	...colorPalette.teal,
	...colorPalette.tealA,
	...colorPalette.tomato,
	...colorPalette.tomatoA,
	...colorPalette.violet,
	...colorPalette.violetA,
	...colorPalette.whiteA,
	...colorPalette.yellow,
	...colorPalette.yellowA
};

export const darkColors = {
	...colorPalette.amberDark,
	...colorPalette.amberDarkA,
	...colorPalette.blackA,
	...colorPalette.blueDark,
	...colorPalette.blueDarkA,
	...colorPalette.bronzeDark,
	...colorPalette.bronzeDarkA,
	...colorPalette.brownDark,
	...colorPalette.brownDarkA,
	...colorPalette.crimsonDark,
	...colorPalette.crimsonDarkA,
	...colorPalette.cyanDark,
	...colorPalette.cyanDarkA,
	...colorPalette.goldDark,
	...colorPalette.goldDarkA,
	...colorPalette.grassDark,
	...colorPalette.grassDarkA,
	...colorPalette.grayDark,
	...colorPalette.grayDarkA,
	...colorPalette.greenDark,
	...colorPalette.greenDarkA,
	...colorPalette.indigoDark,
	...colorPalette.indigoDarkA,
	...colorPalette.limeDark,
	...colorPalette.limeDarkA,
	...colorPalette.mauveDark,
	...colorPalette.mauveDarkA,
	...colorPalette.mintDark,
	...colorPalette.mintDarkA,
	...colorPalette.oliveDark,
	...colorPalette.oliveDarkA,
	...colorPalette.orangeDark,
	...colorPalette.orangeDarkA,
	...colorPalette.pinkDark,
	...colorPalette.pinkDarkA,
	...colorPalette.plumDark,
	...colorPalette.plumDarkA,
	...colorPalette.purpleDark,
	...colorPalette.purpleDarkA,
	...colorPalette.redDark,
	...colorPalette.redDarkA,
	...colorPalette.sageDark,
	...colorPalette.sageDarkA,
	...colorPalette.sandDark,
	...colorPalette.sandDarkA,
	...colorPalette.skyDark,
	...colorPalette.skyDarkA,
	...colorPalette.slateDark,
	...colorPalette.slateDarkA,
	...colorPalette.tealDark,
	...colorPalette.tealDarkA,
	...colorPalette.tomatoDark,
	...colorPalette.tomatoDarkA,
	...colorPalette.violetDark,
	...colorPalette.violetDarkA,
	...colorPalette.whiteA,
	...colorPalette.yellowDark,
	...colorPalette.yellowDarkA
};


export const space = {
  auto: 'auto 0',
	none: px(0),
	space1: px(grid),
	space2: px(grid * 2),
	space3: px(grid * 4),
	space4: px(grid * 6),
	space5: px(grid * 8),
	space6: px(grid * 10),
	space7: px(grid * 12),
	space8: px(grid * 14),
	space9: px(grid * 16),
	space10: px(grid * 32),
	space11: px(grid * 64),
	per25: '25%',
	per33: '33%'
};

export const negativeSpace = {
	negativeSpace1: `${calc(space.space1).negate()}`,
	negativeSpace2: `${calc(space.space2).negate()}`,
	negativeSpace3: `${calc(space.space3).negate()}`,
	negativeSpace4: `${calc(space.space4).negate()}`,
	negativeSpace5: `${calc(space.space5).negate()}`,
	negativeSpace6: `${calc(space.space6).negate()}`,
	negativeSpace7: `${calc(space.space7).negate()}`,
	negativeSpace8: `${calc(space.space8).negate()}`,
	negativeSpace9: `${calc(space.space9).negate()}`,
	negativeSpace10: `${calc(space.space10).negate()}`,
	negativeSpace11: `${calc(space.space11).negate()}`,
};

export const dimensions = {
	full: '100%',
	half: '50%',
	min: 'min-content',
	max: 'max-content',
	fit: 'fit-content',
	...space,
  ...negativeSpace
};

export const percents = {
	percent10: '10%',
	percent20: '20%',
	percent25: '25%',
	percent33: '33%',
	percent50: '50%',
	percent66: '66%'
}

export const root = createGlobalTheme(':root', {
	dimensions: dimensions,
	space: { ...space, ...negativeSpace, ...percents },
	radii: {
		1: '4px',
		2: '6px',
		3: '8px',
		4: '12px',
		round: '50%',
		pill: '9999px',
	},
	fontFace: {
		sans: 'PT Sans',
		serif: 'Literata',
		ibm: 'IBM Plex sans',
		accent: 'Kurbanistika'
	},
	fontSize: {
		1: '12px',
		2: '13px',
		3: '15px',
		4: '17px',
		5: '19px',
		6: '21px',
		7: '27px',
		8: '35px',
		9: '59px',
	},
  fontWeight: {
    normal: '400',
    bold: '700',
    black: '900'
  },
	colors: colorPalette,
	transforms: {
		touchable: 'scale(0.97)',
	},
	transitions: {
		default: '0.3s',
		fast: 'transform .125s ease, opacity .125s ease',
		touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)',
	},
	borders: {
		bottom: `inset 0 -1px 0 0 ${colorPalette.mauveDark.mauve4}`,
		bottomActive: `inset 0 -3px 0 0 ${colorPalette.mauveDark.mauve4}`,
	},
	shadows: {
		small:
			'0 2px 4px 0px rgba(28,28,28,.1), 0 2px 2px -2px rgba(28,28,28,.1), 0 4px 4px -4px rgba(28,28,28,.2)',
		medium:
			'0 2px 4px 0px rgba(28,28,28,.1), 0 8px 8px -4px rgba(28,28,28,.1), 0 12px 12px -8px rgba(28,28,28,.2)',
		large:
			'0 2px 4px 0px rgba(28,28,28,.1), 0 12px 12px -4px rgba(28,28,28,.1), 0 20px 20px -12px rgba(28,28,28,.2)',
	},
});


export const [lightThemeClass, colors] = createTheme({
	...lightColors
})

export const darkThemeClass = createTheme(colors, {
	...darkColors
})

export const vars = { ...root, colors }