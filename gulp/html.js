let gulp = require('gulp'),
	browserSync = require('./browserSync');
gulp.task('html', function(){
 	browserSync.reload();
})
