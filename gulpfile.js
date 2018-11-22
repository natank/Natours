let gulp = require('gulp');

gulp.task('html', function(){
	 gulp.src("app/**/*.html")
	 	.pipe(gulp.dest('dist'))
})



require('./gulp/watch');
require('./gulp/styles');
require('./gulp/scripts');
require('./gulp/clean');


