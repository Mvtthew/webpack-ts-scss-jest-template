const path = require("path");
module.exports = {
	entry: "./src/index.ts",
	output: {
		filename: "index.js",
		path: path.resolve(__dirname, "dist"),
	},
	resolve: {
		extensions: [".webpack.js", ".web.js", ".ts", ".js"],
	},
	module: {
		rules: [
			{ test: /\.ts$/, loader: "ts-loader" },
			{
				test: /\.s[ac]ss$/i,
				use: [
					// Creates `style` nodes from JS strings
					"style-loader",
					// Translates CSS into CommonJS
					"css-loader",
					// Compiles Sass to CSS
					"sass-loader",
				],
			},
		],
	},
	devServer: {
		contentBase: path.join(__dirname, "dist"),
		compress: true,
		port: 9000,
	},
};
