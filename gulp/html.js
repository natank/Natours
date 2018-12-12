let gulp = require('gulp'),
	browserSync = require('./browserSync');
gulp.task('html', ['clean'], function(){
	 gulp.src("app/**/*.html")
	 	.pipe(gulp.dest('app/temp'))
	 	.pipe(browserSync.reload({ stream: true}));
})
