var gulp 	 = require('gulp'),
	imagemin = require('gulp-imagemin'),
	usemin 	 = require('gulp-usemin'),
	uglify 	 = require('gulp-uglify'),
	htmlmin  = require('gulp-htmlmin'),
	cleanCss = require('gulp-clean-css'),
	rev 	 = require('gulp-rev'),
	cssnano	 = require('gulp-cssnano'),
	browserSync = require('./browserSync');

gulp.task('previewRelease', function(){
	browserSync.init({
		notify: false,
		server: "./docs"
	})

})
gulp.task('copyGeneralFiles', ['clean-release'], function() {
	let pathToCopy = [
		'./app/**/*',
		'!./app/*.html', 
		'!./app/assets/images/**',
		'!./app/assets/scripts/**',
		'!./app/assets/scripts',
		'!./app/assets/styles/**',
		'!./app/assets/styles',
		'!./app/base',
		'!./app/base/**',
		'!./app/modules',
		'!./app/temp',
		'!./app/temp/**'
	]
	return gulp.src(pathToCopy)
		.pipe(gulp.dest("./docs"))
})
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
		.pipe(gulp.dest("./docs/assets/images"));
})

gulp.task('useminTrigger', ['clean-release'], function(){
	gulp.start('usemin');
})


gulp.task('usemin',  ['styles', 'scripts'], function() {
  return gulp.src('./app/*.html')
    .pipe(usemin({
      css: [cssnano(), rev()],
      html: [ htmlmin({ collapseWhitespace: true }) ],
      js: [rev()],
      inlinejs: [ uglify() ],
      inlinecss: [ cleanCss(), 'concat' ]
    }))
    .pipe(gulp.dest('docs/'));
});

gulp.task('build', ['clean-release', 'copyGeneralFiles', 'optimizeImages', 'useminTrigger']);