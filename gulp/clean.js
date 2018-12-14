let gulp = require("gulp"),
	clean = require('gulp-clean');
gulp.task('clean', /*['icons'],*/ function(){

	let pathToClean = [
					 'app/temp/**/*.css', 
					 'app/temp/*.html',
					 'app/temp/base',
					 'app/temp/modules',
					 'app/styles.css',
					 'app/base/**',
					 'app/base',
					 'app/modules/**',
					 'app/modules'
					 ];
					
	return gulp.src(pathToClean,{read: false})
		.pipe(clean());
})

gulp.task('clean-release', ['icons'], function(){
	return gulp.src('docs', {read:false})
			.pipe(clean());
}) 