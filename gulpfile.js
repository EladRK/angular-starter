var gulp = require('gulp');
var ts = require('gulp-typescript');
var typescript = require('typescript');
var del = require('del');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function (callback) {
	runSequence('clean', 'ts', 'html', 'copy');
});

gulp.task('ts', function () {
	var tsProject = ts.createProject('tsconfig.json', {
		typescript: typescript
	});

	return gulp.src(['typings/**/**.ts', 'scripts/src/**/**.ts'])
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
		.pipe(sourcemaps.write('../maps', {includeContent: false, sourceRoot: '/scripts/src'}))
        .pipe(gulp.dest('scripts/build'));
});

gulp.task('html', function () {
	return gulp.src(['scripts/src/**/**.html'])
        .pipe(gulp.dest('scripts/build'));
});

gulp.task('copy', function () {
	return gulp.src(['scripts/**/*.*'], { base: "." })
		.pipe(gulp.dest('public'));
});

gulp.task('clean', function () {
	del(['scripts/build', 'scripts/maps','public/scripts']);
});