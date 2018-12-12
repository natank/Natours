var gulp 	 = require('gulp'),
	imagemin = require('gulp-imagemin'),
	usemin 	 = require('gulp-usemin'),
	uglify 	 = require('gulp-uglify'),
	htmlmin  = require('gulp-htmlmin'),
	cleanCss = require('gulp-clean-css'),
	rev 	 = require('gulp-rev'),
	cssnano	 = require('gulp-cssnano');


gulp.task('optimizeImages',['clean-release'], function() {
	return gulp.src(['./app/assets/images/**/*', 
		'!./app/assets/images/icons', '!./app/assets/images/icons/**/*'])
		.pipe(imagemin([
			imagemin.gifsicle({interlaced: true}),
		    imagemin.jpegtran({progressive: true}),
		    imagemin.optipng({optimizationLevel: 5}),
		    imagemin.svgo({
		        plugins: [
		            {removeViewBox: true},
		            {cleanupIDs: false}
		        ]
		    })
		]))
		.pipe(gulp.dest("./release/assets/images"));
})

gulp.task('usemin', ['clean-release'], function() {
  return gulp.src('./app/temp/*.html')
    .pipe(usemin({
      css: [rev(), cssnano()],
      html: [ htmlmin({ collapseWhitespace: true }) ],
      js: [ uglify(), rev() ],
      inlinejs: [ uglify() ],
      inlinecss: [ cleanCss(), 'concat' ]
    }))
    .pipe(gulp.dest('release/'));
});



gulp.task('build', ['optimizeImages','usemin']);