import React from 'react';
import {serial as test} from 'ava';
import {render, Color} from 'ink';
import clearModule from 'clear-module';
import stripAnsi from 'strip-ansi';

// Fake process.stdout
class Stream {
	constructor() {
		this.output = '';
		this.columns = 100;
	}

	write(str) {
		this.output = str;
	}

	get() {
		return this.output;
	}
}

const renderToString = node => {
	const stream = new Stream();

	render(node, {
		stdout: stream,
		debug: true
	});

	return stream.get();
};

test('render', t => {
	// TODO: Find out why this doesn't work to prevent color
	process.env.FORCE_COLOR = 0;
	clearModule('.');
	const Box = require('.');

	const actual = renderToString(
		<Box borderStyle="round" borderColor="cyan" padding={1}>
			I Love <Color magenta>Unicorns</Color>
		</Box>
	);
	console.log(actual);
	t.snapshot(stripAnsi(actual));

	delete process.env.FORCE_COLOR;
});
