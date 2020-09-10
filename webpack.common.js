// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const CopyWebpackPlugin = require('copy-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const workboxPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/scripts/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/i,
				exclude: /(main\.scss|normalize\.css)$/i,
				use: [
					{
						loader: 'lit-scss-loader',
					},
					{
						loader: 'extract-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
					},
				],
			},
			{
				test: /(main\.scss|normalize\.css)$/i,
				use: [
					{
						loader: 'style-loader',
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
					},
				],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'src/templates/index.html'),
			filename: 'index.html',
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/public/'),
					to: path.resolve(__dirname, 'dist/'),
				},
			],
		}),
		new workboxPlugin.GenerateSW({
			swDest: 'service-worker.js',
			clientsClaim: true,
			skipWaiting: true,
			runtimeCaching: [
				{
					// use network-first strategy for detail page
					// because we need to get uptodate reviews
					urlPattern: new RegExp('https://dicoding-restaurant-api.el.r.appspot.com/detail'),
					handler: 'NetworkFirst',
				},
				{
					// for other page, use stale-while-revalidate strategy
					// because we dont need realtime data
					urlPattern: new RegExp('https://dicoding-restaurant-api.el.r.appspot.com/'),
					handler: 'StaleWhileRevalidate',
				},
			],
		}),
	],
};
