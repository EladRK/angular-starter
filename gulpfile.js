var gulp = require('gulp');
var ts = require('gulp-typescript');
var typescript = require('typescript');
var del = require('del');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function (callback) {
	return runSequence('clean-all', 'ts', 'html', 'copy', 'clean-src');
});

// compiles *.ts files by tsconfig.json file and creates sourcemap filse
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

// copy *.html files (templates of components)
// to apropriate directory under public/scripts
gulp.task('html', function () {
	return gulp.src(['scripts/src/**/**.html'])
        .pipe(gulp.dest('scripts/build'));
});

// copy generated/compiled files 
// from scripts/ directory to public/scripts directory
gulp.task('copy', function () {
	return gulp.src(['scripts/**/*.*'], { base: "." })
		.pipe(gulp.dest('public'));
});

//  clean all generated/compiled files 
//	in both scripts/ and public/scripts/ directories
gulp.task('clean-all', function () {
	return runSequence('clean-src', 'clean-public');
});

//  clean all generated/compiled files 
//	only in public/scripts/ directory
gulp.task('clean-public', function () {
	return del(['public/scripts']);
});

//  clean all generated/compiled files 
//	only in both scripts/ directory
gulp.task('clean-src', function () {
	return del(['scripts/build', 'scripts/maps']);
});