var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var watchify = require('watchify');
var source = require('vinyl-source-stream');
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');
var streamify = require('gulp-streamify');
var notify = require('gulp-notify');
var server = require('gulp-develop-server');
var minifycss = require('gulp-minify-css');
var clean = require('gulp-clean');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber');
var less = require('gulp-less');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

var production = false;
var libs = ['react/addons', 'express', 'material-ui', 'react-tap-event-plugin', 'react-router',
	'react-responsive', 'classnames'];

gulp.task('default', ['copy', 'compass', 'compass-watch', 'less', 'less-watch', 'browserify',
	'server:start']);
gulp.task('build', ['prd', 'copy', 'compass', 'less', 'browserify']);

gulp.task('clean', function() {
	return gulp.src(['public'], {read: false})
		.pipe(clean({force: true}));
});

gulp.task('prd', function () {
	production = true;
});

gulp.task('server:start', function() {
	server.listen( { path: './server.js', killSignal: 'SIGTERM'} );
});

// Copy all static assets
gulp.task('copy', function() {
	gulp.src('index.html')
		.pipe(gulp.dest('public'));

	gulp.src('./assets/img/**')
		.pipe(gulp.dest('public/img'));

	gulp.src('./node_modules/structure-grid/structure.min.css')
		.pipe(gulp.dest('public/css'));
});

gulp.task('html', function () {
	return gulp.src('index.html').
		pipe(gulp.dest('public'));
});

gulp.task('compass-watch', function() {
	gulp.watch('sass/**/*.scss', ['compass']);
});

gulp.task('compass', function() {
	gulp.src('./sass/main.scss')
		.pipe(plumber({
			errorHandler: function (error) {
				console.log(error.message);
				this.emit('end');
			}}))
		.pipe(compass({
			project: __dirname,
			css: 'public/css',
			sass: 'sass'
		}))
		.pipe(gulpif(production, minifycss({keepBreaks:true})))
		.pipe(gulp.dest('public/css'));
});

gulp.task('less-watch', function() {
	gulp.watch('./less/**/*.less', ['less']);
});

gulp.task('less', function () {
	return gulp.src('./less/**/main.less')
		.pipe(gulpif(!production, sourcemaps.init()))
		.pipe(plumber({
			errorHandler: function (error) {
				console.log(error.message);
				this.emit('end');
			}}))
		.pipe(less())
		//Autoprefixer is needed by safari and other browsers (for make material-ui work properly)
		.pipe(autoprefixer({cascade: false, browsers: ['last 2 versions']}))
		.pipe(gulpif(production, minifycss({keepBreaks:true})))
		.pipe(gulpif(!production, sourcemaps.write()))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('browserify', function () {
	runBrowserifyTask({
		watch: !production,
		dest: 'public/js',
		uglify: production
	})
});

var runBrowserifyTask = function (options) {

	// We create one bundle for our dependencies
	var vendorBundler = browserify({
		debug: true // We also add sourcemapping
	})
		.require(libs);

	// Create the application bundler
	var bundler = browserify({
		debug: true, // Sourcemapping

		// watchify requires these options
		cache: {}, packageCache: {}, fullPaths: true
	})
		.require(require.resolve('./js/index.js'), { entry: true })
		.transform(reactify, {"es6": true}) // Use reactify to transform JSX content
		//Do not include
		.external(libs);

	// The actual bundling process
	var rebundle = function() {
		var start = Date.now();
		bundler.bundle()
			.on('error', function(err){
				console.log(err.message); //Show the error
				this.end(); //Don't try to create the bundle.js
			})
			.pipe(source('bundle.js'))
			.pipe(gulpif(options.uglify, streamify(uglify())))
			.pipe(gulp.dest(options.dest))
			.pipe(gulpif(!production,
				notify(function (){
					console.log('Browserify in ' + (Date.now() - start) + 'ms')})))
	};

	// Add watchify
	if (options.watch) {
		bundler = watchify(bundler);
		bundler.on('update', rebundle)
	}

	// Run the vendors bundle when the default Gulp task starts
	vendorBundler.bundle()
		.pipe(source('vendors.js'))
		.pipe(streamify(uglify()))
		.pipe(gulp.dest(options.dest));

	return rebundle();

};