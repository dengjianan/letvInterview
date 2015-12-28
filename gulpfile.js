var gulp=require('gulp'),
	connect=require('gulp-connect'),
	watch=require('gulp-watch');
gulp.task('connect',function(){
	connect.server({
		port:9001,
		livereload:true
	});
});
gulp.task('html',function(){
	gulp.src('*.html')
	.pipe(connect.reload());
});
gulp.task('watch',function(){
	gulp.watch(['*html'],['html']);
})
gulp.task('default',['connect','watch']);