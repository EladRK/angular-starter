var gulp = require('gulp');

var ts = require('gulp-typescript');


// JS hint task
gulp.task('default', function() {
	
	gulp.start('tsc');
//  gulp.src('./src/scripts/*.js')
//    .pipe(jshint())
//    .pipe(jshint.reporter('default'));
});

gulp.task('tsc', function(){
	var tsProject = ts.createProject('tsconfig.json', {typescript: require('typescript')});

	var tsResult = gulp.src(['typings/**.ts', 'src/**.ts'])
		.pipe(ts(tsProject));
		
		

	return tsResult;
//	var tsResult = tsProject.src() // instead of gulp.src(...) 
//        .pipe(ts(tsProject));
});