let gulp = require("gulp"),
	clean = require('gulp-clean');
gulp.task('clean', function(){

	gulp.src('app/temp/*.html',{read:false})
		.pipe(clean());
	return gulp.src('app/temp/**/*.css', {read: false})
		.pipe(clean());
})

gulp.task('clean-release', ['icons'], function(){
	return gulp.src('docs', {read:false})
			.pipe(clean());
}) 