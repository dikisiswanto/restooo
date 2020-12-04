/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const CopyWebpackPlugin = require('copy-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const workboxPlugin = require('workbox-webpack-plugin');
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default;
// eslint-disable-next-line import/no-extraneous-dependencies
const ImageminMozjpeg = require('imagemin-mozjpeg');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/scripts/index.js'),
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			minSize: 1000,
			maxSize: 0,
			minChunks: 1,
			maxAsyncRequests: 30,
			maxInitialRequests: 30,
			automaticNameDelimiter: '~',
			enforceSizeThreshold: 50000,
			cacheGroups: {
				defaultVendors: {
					test: /[\\/]node_modules[\\/]/,
					priority: -10,
					reuseExistingChunk: true,
				},
				default: {
					minChunks: 2,
					priority: -20,
					reuseExistingChunk: true,
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/i,
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
				{
					urlPattern: new RegExp('https://fonts.gstatic.com/'),
					handler: 'StaleWhileRevalidate',
				},
			],
		}),
		new ImageminWebpackPlugin({
			plugins: [
				ImageminMozjpeg({
					quality: 50,
					progressive: true,
				}),
			],
		}),
		new BundleAnalyzerPlugin(),
	],
};
