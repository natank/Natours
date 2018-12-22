var gulp = require('gulp'),
	svgSprite = require('gulp-svg-sprite'),
	rename = require('gulp-rename'),
	del = require('del');

var config = {
	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css:{
					template: './gulp/templates/sprite.css'
				}	
			}
		}
	}
}

gulp.task('beginClean', function(){
	return del(['./app/assets/images/sprites'])
})

gulp.task('createSprite', ['beginClean'], function() {
	// return gulp.src("./app/assets/images/icons/**/*.svg")
	// 	.pipe(svgSprite(config))
	// 	.pipe(gulp.dest("./app/assets/images/sprites"));
	var spriteOutput = gulp.src("./app/");


});

gulp.task('copySpriteCSS', ['createSprite'], function() {
	return gulp.src('./app/assets/images/sprites/css/sprite.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./app/assets/styles/modules'));
});


gulp.task('copySpriteGraphic', ['createSprite'], function() {
	return gulp.src('./app/assets/images/sprites/css/**/*.svg')
		.pipe(gulp.dest('./app/assets/images/sprites'))
})


gulp.task('endClean', ['copySpriteCSS', 'copySpriteGraphic'], function() {

	return del('./app/assets/images/sprites/css');
})

gulp.task('icons', ['createSprite', 
			'copySpriteCSS','copySpriteGraphic', 
			'endClean']);



