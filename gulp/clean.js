let gulp = require("gulp"),
	clean = require('gulp-clean');
gulp.task('clean', function(){
	return gulp.src('dist/**/*.css', {read: false})
		.pipe(clean());
})