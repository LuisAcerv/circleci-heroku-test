const webpack = require('webpack');

module.exports = {
	entry: ['react-hot-loader/patch', './src/app.js'],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},

			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	devServer: {
		contentBase: './dist',
		hot: true,
		historyApiFallback: true
	}
};
