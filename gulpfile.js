var gulp = require('gulp');
var ts = require('gulp-typescript');
var typescript = require('typescript');
var del = require('del');
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var open = require('gulp-open');
var express = require('gulp-express');

var serverOptions = {
	root: 'public',
	port: 8000,
	livereload: true,
};

var tasks = {
	'default': 'default',
	cleanAll : 'Clean-All',
	typeScript: 'TypeScript-Compile',
	html: 'Copy-HTML',
	copy: 'Copy-Compiled-JS',
	cleanSrc: 'Clean-Source',
	cleanPublic: 'Clean-Public',
	startWebServer: 'Start-WebServer',
	openBrowser: 'Open-Browser',
	watch: 'Watch',
	watcherRebuild: 'Watcher-Rebuild'
};

// Main task 
gulp.task(tasks.default, function () {
	runSequence(tasks.cleanAll,
		tasks.typeScript,
		tasks.html,
		tasks.copy,
		tasks.cleanSrc,
		tasks.startWebServer,
		tasks.openBrowser,
		tasks.watch);
});

// default task starts watcher. in order not to start it each change
// watcher will run the task bellow
gulp.task(tasks.watcherRebuild, function (callback) {
	runSequence(
		tasks.cleanPublic, 
		tasks.typeScript,
		tasks.html,
		tasks.copy,
		tasks.cleanSrc);
	callback();
});

// compiles *.ts files by tsconfig.json file and creates sourcemap filse
gulp.task(tasks.typeScript, function () {
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
gulp.task(tasks.html, function () {
	return gulp.src(['scripts/src/**/**.html'])
        .pipe(gulp.dest('scripts/build'));
});

// copy generated/compiled files 
// from scripts/ directory to public/scripts directory
gulp.task(tasks.copy, function () {
	return gulp.src(['scripts/**/*.*'], { base: "." })
		.pipe(gulp.dest('public'))
		.pipe(connect.reload());
});

//  clean all generated/compiled files 
//	in both scripts/ and public/scripts/ directories
gulp.task(tasks.cleanAll, function () {
	return runSequence(tasks.cleanSrc, tasks.cleanPublic);
});

//  clean all generated/compiled files 
//	only in public/scripts/ directory
gulp.task(tasks.cleanPublic, function () {
	return del(['public/scripts']);
});

//  clean all generated/compiled files 
//	only in both scripts/ directory
gulp.task(tasks.cleanSrc, function () {
	return del(['scripts/build', 'scripts/maps']);
});

// watcher
gulp.task(tasks.watch, function () {
	gulp.watch(['scripts/src/**/**.ts', 'scripts/src/**/**.html'], [tasks.watcherRebuild]);
});

// starts web server
gulp.task(tasks.startWebServer, function () {
	//connect.server(serverOptions);
	return express.run([
        'server.js'
    ]);
});

gulp.task(tasks.openBrowser, function () {
	gulp.src('public/index.html')
  		.pipe(open('', { url: 'http://localhost:' + serverOptions.port }));
});