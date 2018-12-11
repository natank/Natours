var gulp = require('gulp'),
	imagemin = require('gulp-imagemin');

gulp.task('optimizeImages', function() {
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

					
gulp.task('build', ['optimizeImages']);