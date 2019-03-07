import React from 'react';
import {Box as InkBox} from 'ink';
import PropTypes from 'prop-types';
import boxen from 'boxen';

const Box = props => (
	<InkBox unstable__transformChildren={text => boxen(text, props)}>
		{props.children}
	</InkBox>
);

Box.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node
	]).isRequired,
	borderColor: PropTypes.string,
	borderStyle: PropTypes.oneOfType([
		PropTypes.oneOf([
			'single',
			'double',
			'round',
			'singleDouble',
			'doubleSingle',
			'classic'
		]),
		PropTypes.shape({
			topLeft: PropTypes.string,
			topRight: PropTypes.string,
			bottomLeft: PropTypes.string,
			bottomRight: PropTypes.string,
			horizontal: PropTypes.string,
			vertical: PropTypes.string
		})
	]),
	dimBorder: PropTypes.bool,
	padding: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.shape({
			top: PropTypes.number,
			right: PropTypes.number,
			bottom: PropTypes.number,
			left: PropTypes.number
		})
	]),
	margin: PropTypes.oneOfType([
		PropTypes.number,
		PropTypes.shape({
			top: PropTypes.number,
			right: PropTypes.number,
			bottom: PropTypes.number,
			left: PropTypes.number
		})
	]),
	float: PropTypes.oneOf([
		'right',
		'center',
		'left'
	]),
	backgroundColor: PropTypes.string,
	align: PropTypes.oneOf([
		'left',
		'center',
		'right'
	])
};

module.exports = Box;
