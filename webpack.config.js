
const path = require('path');
require("@babel/register");

// Webpack Configuration

const config = {
	mode: "development",
	optimization: {
		// We no not want to minimize our code.
		minimize: false
	},
	// Entry
	entry: "./app/assets/scripts/App.js",
	output: {
		path: path.resolve(__dirname, "app/temp/scripts"),
		filename: "App.js"
	},
	 module: {
         rules: [
             //Javascript/JSX files
             {
                 test: /\.js$/,
                 exclude: /node_modules/,
                 use: ['babel-loader'],
             },
             //CSS Files
             {
             	test: /\.css$/,
             	use: ['style-loader', 'css-loader'],
             }
         ]
     },
     //Plugins
     plugins: [],
 };
  
 // Exports
 module.exports = config;