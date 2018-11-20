let gulp = require('gulp'),
	browserSync = require('browser-sync').create();

gulp.task('browser-sync', ['styles'], function() {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
});