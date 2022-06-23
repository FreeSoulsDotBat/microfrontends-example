const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

const deps = require('./package.json').dependencies
module.exports = (_, argv) => ({
	output: {
		publicPath: argv.mode === 'development'
			? 'http://localhost:3000/'
			: 'https://microfrontends-example.netlify.app/'
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
	},

	devServer: {
		port: 3000,
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
				use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
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
			name: 'shell',
			filename: 'remoteEntry.js',
			remotes: {
				mf1: 'mf1@https://microfrontend1-mfe.vercel.app/remoteEntry.js',
				mf2: 'mf2@https://microfrontend2-mfe.vercel.app/remoteEntry.js',
			},
			exposes: {},
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
		new HtmlWebPackPlugin({
			template: './src/index.html'
		})
	]
})
