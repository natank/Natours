let gulp = require('gulp'),
	webpack = require('webpack'),
	browserSync = require('./browserSync');

gulp.task('scripts',  function(callback){
	webpack(require('../webpack.config.js'), function(err, stats) {
		if(err) {
			console.log(err.toString());
		}
		console.log(stats.toString());
		callback();
	})
})