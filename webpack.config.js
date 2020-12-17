const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
	const nodeEnvironment = env.NODE_ENV;

	return {
		entry: "./app/index.tsx",
		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "index_bundle.js",
			publicPath: "/",
		},
		resolve: {
			extensions: [".ts", ".tsx", ".js"],
		},
		module: {
			rules: [
				{
					test: /\.(.d)?(j|t)sx?$/,
					use: {
						loader: "ts-loader",
					},
					exclude: /node_modules/,
				},
				{
					test: /\.scss$/,
					use: ["style-loader", "css-loader", "sass-loader"],
				},
				{
					test: /\.(woff|woff2|eot|ttf|svg|jpe?g|png)$/,
					use: {
						loader: "file-loader",
					},
				},
			],
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: "app/index.html",
			}),
		],
		devtool: "source-map",
		mode: nodeEnvironment === "production" ? "production" : "development",
		devServer: {
			historyApiFallback: true,
		},
	};
};
