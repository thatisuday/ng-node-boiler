const
	gulp 			= require('gulp'),
	cssmin 			= require('gulp-cssmin'),
	uglify 			= require('gulp-uglify'),
	autoprefixer 	= require('gulp-autoprefixer'),
	concat 			= require('gulp-concat'),
	rename 			= require('gulp-rename'),
	sass 			= require('gulp-sass'),
	sourcemaps 		= require('gulp-sourcemaps'),
	htmlmin 		= require('gulp-htmlmin'),
	_env 			= require(__dirname + '/_env')
;

/************************************************************************/

// build (html) templates
gulp.task('templates', function(){
	gulp
	.src(_env.dir.static.templates + '/src/**/*.html')
	.pipe(htmlmin({collapseWhitespace: true, removeComments:true}))
    .pipe(gulp.dest(_env.dir.static.templates + '/dist'));
});

// build scss
gulp.task('scss', function(){
	gulp
	.src([_env.dir.static.scss + '/src/**/*.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(concat('main.css'))
	.pipe(sourcemaps.init())
	.pipe(autoprefixer())
	.pipe(gulp.dest(_env.dir.static.scss + '/dist'))
	.pipe(rename({suffix : '.min'}))
	.pipe(cssmin())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(_env.dir.static.scss + '/dist'));
});

// build javascript
gulp.task('js', function(){
	gulp
	.src([
		_env.dir.static.js + '/src/init.js', 
		_env.dir.static.js + '/src/config.js', 
		_env.dir.static.js + '/src/**/*.js', 
		_env.dir.static.js + '/src/run.js'
	])
	.pipe(sourcemaps.init())
	.pipe(concat('main.js'))
	.pipe(gulp.dest(_env.dir.static.js + '/dist'))
	.pipe(rename({suffix : '.min'}))
	.pipe(uglify())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest(_env.dir.static.js + '/dist'));
});

/************************************************************************/

gulp.task('build', ['templates', 'scss', 'js']);

/************************************************************************/

gulp.task('watch', ['build'], function(){
	gulp.watch([_env.dir.static.templates + '/src/**/*.html'], ['templates']);
	gulp.watch([_env.dir.static.scss + '/src/**/*.scss'], ['scss']);
	gulp.watch([_env.dir.static.js + '/src/**/*.js'], ['js']);
});