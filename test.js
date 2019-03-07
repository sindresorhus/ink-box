import {serial as test} from 'ava';
import React from 'react';
import {Color} from 'ink';
import {render} from 'ink-testing-library';
import clearModule from 'clear-module';
import stripAnsi from 'strip-ansi';

test('render', t => {
	// TODO: Find out why this doesn't work to prevent color
	process.env.FORCE_COLOR = 0;
	clearModule('.');
	const Box = require('.');

	const {lastFrame} = render(
		<Box borderStyle="round" borderColor="cyan" padding={1}>
			I Love <Color magenta>Unicorns</Color>
		</Box>
	);
	console.log(lastFrame());
	t.snapshot(stripAnsi(lastFrame()));

	delete process.env.FORCE_COLOR;
});
