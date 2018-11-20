let gulp = require('gulp'),
	nested = require('postcss-nested'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	vars = require('postcss-simple-vars'),
	cssnano = require('cssnano'),
	mixins = require('postcss-mixins'),
	cssimport = require('postcss-import');


gulp.task('styles',['clean'], function(){
	// postcss, autoprefixer, nested css, css vars
	// cssnano, css import, mixin
	return gulp.src('app/assets/styles/**/*.css')
		.pipe(postcss([cssimport, vars, mixins, autoprefixer, nested]))
		.pipe(gulp.dest('dist'))
})