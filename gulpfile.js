var gulp = require('gulp');
var ts = require('gulp-typescript');
var typescript = require('typescript');
var del = require('del');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');

gulp.task('default', function () {
	runSequence('clean-all', 'ts', 'html', 'copy', 'clean-src', 'webserver', 'watch');
});

// default task starts watcher. in order not to start it each change
// watcher will run the task bellow
gulp.task('watcher-build', function (callback) {
	runSequence('clean-public', 'ts', 'html', 'copy', 'clean-src');
	callback();
});

// compiles *.ts files by tsconfig.json file and creates sourcemap filse
gulp.task('ts', function () {
	var tsProject = ts.createProject('tsconfig.json', {
		typescript: typescript
	});

	return gulp.src(['typings/**/**.ts', 'scripts/src/**/**.ts'])
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
		.pipe(sourcemaps.write('../maps', { includeContent: false, sourceRoot: '/scripts/src' }))
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
		.pipe(gulp.dest('public'))
		.pipe(connect.reload());
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

// watcher
gulp.task('watch', function () {
	gulp.watch(['scripts/src/**/**.ts', 'scripts/src/**/**.html'], ['watcher-build']);
});

// starts web server
gulp.task('webserver', function () {
	connect.server({
		root: 'public',
		port: 8000,
		livereload: true
	});
});