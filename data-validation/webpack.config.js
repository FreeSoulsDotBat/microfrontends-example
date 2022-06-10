const HtmlWebPackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const deps = require('./package.json').dependencies

module.exports = {
	output: {
		publicPath: 'http://localhost:3004/'
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
				'./localStorageService':
					'./src/services/cache/local-storage-service.ts'
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
}