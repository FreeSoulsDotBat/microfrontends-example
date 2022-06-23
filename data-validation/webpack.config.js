const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('./package.json').dependencies

module.exports = (_, argv) => ({
	output: {
		publicPath: argv.mode === 'development'
			? 'http://localhost:3004/'
			: 'https://data-validation-mfe.vercel.app/'
	},

	resolve: {
		extensions: ['.tsx', '.ts', '.jsx', '.js', '.json']
	},

	devServer: {
		port: 3004,
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
			name: 'dataValidation',
			filename: 'remoteEntry.js',
			remotes: {},
			exposes: {
				'./httpService': './src/services/http/http-service.ts',
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
		new HtmlWebPackPlugin({
			template: './src/index.html'
		})
	]
})
