let gulp = require('gulp'),
	browserSync = require('./browserSync');
gulp.task('html', function(){
	 gulp.src("app/**/*.html")
	 	.pipe(gulp.dest('dist'))
	 	.pipe(browserSync.reload({ stream: true}));
})
