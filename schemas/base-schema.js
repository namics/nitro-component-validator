'use strict';

module.exports = {
	$schema: 'http://json-schema.org/draft-04/schema#',
	id: 'nitro-validator-base',
	type: 'object',
	properties: {
		name: {
			type: 'string',
		},
		title: {
			type: 'string',
		},
		stability: {
			type: 'string',
		},
		type: {
			type: 'string',
		},
		properties: {
			type: 'object',
		},
	},
	required: [
		'title',
		'properties',
	],
};
