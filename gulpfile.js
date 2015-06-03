var gulp = require('gulp');
var ts = require('gulp-typescript');
var typescript = require('typescript');

gulp.task('default', function() {
	gulp.start('build-ts');
	gulp.start('copy-build-and-src');
});

gulp.task('build-ts', [], function() {

	var tsProject = ts.createProject('tsconfig.json', {
	    typescript: typescript
	});
	
	return gulp.src(['typings/**/**.ts', 'src/**/**.ts'])
        .pipe(ts(tsProject))
        .pipe(gulp.dest('build'));
});

gulp.task('copy-build-and-src', function(){
	return gulp.src(['build/**/*.*', 'src/**/*.*'])
	 	.pipe(gulp.dest('public'));
});