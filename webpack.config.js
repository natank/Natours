
const path = require('path');
require("@babel/register");

// Webpack Configuration

const config = {
	// Entry
	entry: "./app/assets/scripts/App.js",
	output: {
		path: path.resolve(__dirname, "dist/scripts"),
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