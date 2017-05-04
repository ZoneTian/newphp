var
	gulp 	  = require('gulp'),
	uglify 	  = require('gulp-uglify'),
	minifyCss = require('gulp-clean-css'),
	connect   = require('gulp-connect'),
	sass	  = require('gulp-ruby-sass');


// src 指定要操作的文件
// gulp.src('需要操作的文件');

// dest 指定你要输出的目录（目的地）

// gulp.dest('目的地');

// task 建立任务
// gulp.task(name, [], fn);


// 建立任务，压缩JS文件
gulp.task('minifyJS', function () {
	return gulp.src('src/js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js/'));
});

// 建立压缩CSS文件的任务
gulp.task('minifyCSS', function () {
	return gulp.src('src/css/*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('./dist/style/'));
});
// 建立操作SASS的任务
gulp.task('compileSass', function () {
	return sass('src/sass/*.scss', {
		style: 'compressed'
	}).pipe(gulp.dest('dist/sass/'));
});
//编译sass文件
gulp.task('css',function(){
	sass('src/sass/*.scss',{
		style:'compressed'
	}).pipe(gulp.dest('dist/css'))
})
// 建立重新加载HTML的任务
gulp.task('loadHTML', ['minifyCSS', 'minifyJS', 'compileSass','css'], function () {
	return gulp.src('index.html').pipe(connect.reload());
});

// 建立默认的任务

gulp.task('default', ['minifyJS', 'minifyCSS', 'compileSass','css'], function () {
	// 开启服务
	connect.server({
		livereload: true
	});
	// 监听JS
	gulp.watch('src/js/*.js', ['loadHTML']);
	// 监听CSS
	gulp.watch('src/style/*.css', ['loadHTML']);
	// 监听SASS源文件
	gulp.watch('src/sass/*.scss', ['loadHTML']);
	//监听sass
	gulp.watch('src/sass/*.scss',['loadHTML'])
});