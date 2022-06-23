const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const webpack = require('webpack')

const deps = require('./package.json').dependencies
module.exports = (_, argv) => ({
	output: {
		publicPath: argv.mode === 'development'
			? 'http://localhost:3002/'
			: 'https://microfrontend2-mfe.vercel.app/'
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
	},

	devServer: {
		port: 3002,
		historyApiFallback: true
	},

	module: {
		rules: [
			{
				test: /\.m?js/,
				type: 'javascript/auto',
				resolve: {
					fullySpecified: false
				}
			},
			{
				test: /\.(css|s[ac]ss)$/i,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.(ts|tsx|js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			}
		]
	},

	plugins: [
		new ModuleFederationPlugin({
			name: 'mf2',
			filename: 'remoteEntry.js',
			remotes: {
				dataValidation: 'dataValidation@https://data-validation-mfe.vercel.app/remoteEntry.js'
			},
			exposes: {
				'./Mf2Routes': './src/routes.tsx'
			},
			shared: {
				...deps,
				react: {
					singleton: true,
					requiredVersion: deps.react
				},
				'react-dom': {
					singleton: true,
					requiredVersion: deps['react-dom']
				}
			}
		}),
		new webpack.DefinePlugin({
			'process.env.API_KEY_CATS': JSON.stringify(process.env.API_KEY_CATS)
		}),
		new HtmlWebPackPlugin({
			template: './src/index.html'
		})
	]
})
