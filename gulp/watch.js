let gulp = require('gulp'),
	browserSync = require('./browserSync');


gulp.task('cssInject', ['styles'],function(){
	return gulp.src("./dist/style.css")
		 .pipe(browserSync.reload({ stream: true}));;
})


gulp.task('watch', ['styles', 'html'], function() {
	
	browserSync.init({
		notify: false,
		server: "./dist"
	})

	gulp.watch('./app/**/*.html', function() {
		gulp.start('html');
		browserSync.reload();
	});

	gulp.watch('./app/assets/styles/**/*.css', ['styles']);
})

