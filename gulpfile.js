// Add Plugins
var gulp 		= require('gulp'),
	sass 		= require('gulp-sass'),
	concat		= require('gulp-concat'),
	minifyCSS	= require('gulp-minify-css'),
	rename		= require('gulp-rename');

// Sass Task
gulp.task('sass', function() {
	gulp.src('src/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('assets/css'))
		.pipe(concat('style.css'))
		.pipe(gulp.dest('assets/css'))
		.pipe(minifyCSS())
		.pipe(rename('style.min.css'))
		.pipe(gulp.dest('assets'))
});


// Watch files
gulp.task('watch', function() {
	gulp.watch('src/sass/*.scss',['sass']);
});

// Set default task
gulp.task('default', ['watch']);