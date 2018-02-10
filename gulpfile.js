var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat');

var jsSrc = ['src/scripts/*.js'],
	sassSrc = ['src/sass/*.scss'],
	dist = 'dist';

gulp.task('sass', function () {
	gulp.src('src/sass/zcss.scss')
		.pipe(sass({
			outputStyle: 'compressed'
		}))
		.on('error', gutil.log)
		.pipe(concat('app.min.css'))
		.pipe(gulp.dest(dist))
});

gulp.task('js', function () {
	gulp.src(jsSrc)
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest(dist))
});

gulp.task('watch', function () {
	gulp.watch(jsSrc, ['js']);
	gulp.watch(sassSrc, ['sass']);
});

gulp.task('default', ['js', 'sass', 'watch']);