var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect')

var jsSrc = ['node_modules/jquery/dist/jquery.js', 'src/scripts/*.js'],
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
		.pipe(connect.reload())
});

gulp.task('js', function () {
	gulp.src(jsSrc)
		.pipe(uglify())
		.pipe(concat('app.js'))
		.pipe(gulp.dest(dist))
		.pipe(connect.reload())
});

gulp.task('html', function () {
	gulp.src('index.html')
		.pipe(concat('index.html'))
		.pipe(connect.reload());
});

gulp.task('watch', function () {
	gulp.watch(jsSrc, ['js']);
	gulp.watch(sassSrc, ['sass']);
	gulp.watch(['index.html'], ['html']);
});

gulp.task('connect', function () {
	connect.server({
		root: '',
		livereload: 'true',
	});
});

gulp.task('default', ['js', 'sass', 'html', 'connect', 'watch']);