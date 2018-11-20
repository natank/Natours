let gulp = require('gulp');

gulp.task('watch', ['styles'], function() {
	 gulp.watch('./app/assets/styles/**/*.css', ['styles'], function(){
	 	gulp.start('styles', function(){
	 		
	 	})
	 }); 
})