var gulp = require('gulp');
var ts = require('gulp-typescript');
var typescript = require('typescript');
var del = require('del');
var runSequence = require('run-sequence');

gulp.task('default', function(callback){
	runSequence(
		'clean','ts', 'copy');
});

gulp.task('ts', function() {
	var tsProject = ts.createProject('tsconfig.json', {
	    typescript: typescript
	});
	
	return gulp.src(['typings/**/**.ts', 'src/**/**.ts'])
        .pipe(ts(tsProject))
        .pipe(gulp.dest('build'));
});

gulp.task('copy', function(){
	return gulp.src(['build/**/*.*', 'src/**/*.*'], {base: "."})
	 	.pipe(gulp.dest('public/scripts'));
});

gulp.task('clean', function () {
	del('build');
	del('public/scripts');
});