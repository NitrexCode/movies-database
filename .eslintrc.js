/* eslint-disable */

module.exports = {
	'env': {
		'browser': true,
		'es2021': true,
		'node': true,
	},
	'extends': [
		'plugin:react/recommended',
	],
	'overrides': [
		{
			'env': {
				'node': true,
			},
			'files': [
				'.eslintrc.{js,cjs}',
			],
			'parserOptions': {
				'sourceType': 'script',
			}
		}
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 'latest',
		'sourceType': 'module'
	},
	'plugins': [
		'@typescript-eslint',
		'react',
	],
	'rules': {
		'indent': [
			'error',
			'tab',
		],
		'linebreak-style': [
			'error',
			'windows',
		],
		'quotes': [
			'error',
			'single',
		],
		'semi': [
			'error',
			'never',
		],
		'react/react-in-jsx-scope': 'off',
	}
}
