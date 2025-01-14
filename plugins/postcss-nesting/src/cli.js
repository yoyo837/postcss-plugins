import plugin from './index';
import { cli, helpTextLogger } from '@csstools/base-cli';

cli(
	plugin,
	[],
	helpTextLogger(
		'postcss-nesting',
		'PostCSS Nesting',
		'Lets you nest style rules inside each other, following the CSS Nesting specification.',
		null,
	),
);
