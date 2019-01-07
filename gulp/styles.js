let gulp = require('gulp'),
	nested = require('postcss-nested'),
	postcss = require('gulp-postcss'),
	autoprefixer = require('autoprefixer'),
	vars = require('postcss-simple-vars'),
	cssnano = require('cssnano'),
	mixins = require('postcss-mixins'),
	cssimport = require('postcss-import'),
	variables = require('./config/variables'),
	browserSync  = require('./browserSync'),
	hexrgba = require('postcss-hexrgba'),
	easings = require('postcss-easings');


gulp.task('styles',['clean'], function(){
	let postcssPlugins = 
					[cssimport
					,vars({variables: variables}) 
					,mixins
					,hexrgba
					,autoprefixer
					,nested,
					easings];

	return gulp.src('app/assets/styles/**/*.css')
		.pipe(postcss(postcssPlugins))
		.on('error', function(errorInfo){
			console.log(errorInfo.toString())
			this.emit('end');
		})
		.pipe(gulp.dest('app/temp'))
		.on('finish', function(){
			return gulp.src('app/temp/styles.css')
			.pipe(gulp.dest('app'))
			.pipe(browserSync.reload({ stream: true}));		
		});

	
})

