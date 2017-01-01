 module.exports = {
     entry: './src/app.js',
     output: {
         path: './bin',
         filename: 'app.bundle.js'
     },
        module: {
		loaders: [
			{ test: /\.css$/, loader: "css-loader" }
		]
	}
 }; 