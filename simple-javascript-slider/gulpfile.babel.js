var gulp = require('gulp');
var babel = require('gulp-babel');
var jade = require('gulp-jade');
var stylus = require('gulp-stylus');
var autoprefixer = require('autoprefixer-stylus');


gulp.task('javascript', () => {
	return gulp.src('assets/scripts/script.js')
		.pipe(babel())
		.pipe(gulp.dest('build/scripts/'))
});

gulp.task('template', () => {
	return gulp.src('assets/index.jade')
		.pipe(jade({ pretty: true }))
		.pipe(gulp.dest('build/'))
});

gulp.task('styles', () => {
	return gulp.src('assets/styles/style.styl')
		.pipe(stylus({
			use: [autoprefixer()]
		}))
		.pipe(gulp.dest('build/styles/'))
});

gulp.task('watch', () => {
	gulp.watch('assets/index.jade', ['template'])
	gulp.watch('assets/styles/**.styl', ['styles'])
	gulp.watch('assets/scripts/script.js', ['javascript'])
});

gulp.task('default', ['template', 'styles', 'javascript']);
