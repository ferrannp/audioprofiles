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
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var livereload = require('gulp-livereload');
var babelify = require('babelify');

var production = false;
var libs = ['react', 'material-ui', 'react-tap-event-plugin', 'react-router',
  'classnames'];

gulp.task('default', ['html', 'assets', 'sass', 'sass-watch', 'browserify', 'server:start']);
gulp.task('build', ['prd', 'html', 'assets', 'sass', 'browserify']);

gulp.task('clean', function () {
  return gulp.src(['public'], {read: false})
    .pipe(clean({force: true}));
});

gulp.task('prd', function () {
  production = true;
});

gulp.task('server:start', function () {
  server.listen({path: './server.js', killSignal: 'SIGTERM'});
  livereload.listen({basePath: 'public'});
});

// Copy all static assets
gulp.task('assets', function () {
  gulp.src('./assets/img/**')
    .pipe(gulp.dest('public/img'));
});

gulp.task('html', function () {
  return gulp.src('index.html').pipe(gulp.dest('public'));
});

gulp.task('sass-watch', function () {
  gulp.watch('sass/**/*.scss', ['sass']);
});

gulp.task('sass', function () {
  gulp.src('./sass/main.scss')
    .pipe(gulpif(!production, sourcemaps.init()))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({cascade: false, browsers: ['last 2 versions']}))
    .pipe(gulpif(!production, sourcemaps.write()))
    .pipe(gulpif(production, minifycss({keepBreaks: true})))
    .pipe(gulp.dest('public/css'))
    .pipe(gulpif(!production, livereload()));
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
    debug: production === false // We also add sourcemapping
  })
    .require(libs);

  var bundler = browserify('./js/index.js', { debug: production === false })
    .transform("babelify", {presets: ["es2015", "react"]})
    .external(libs); //Do not include

  // The actual bundling process
  var rebundle = function () {
    var start = Date.now();
    bundler.bundle()
      .on('error', function (err) {
        console.log(err.message); //Show the error
        this.emit('end'); //Don't try to create the bundle.js
      })
      .pipe(source('bundle.js'))
      .pipe(gulpif(options.uglify, streamify(uglify())))
      .pipe(gulp.dest(options.dest))
      .pipe(gulpif(options.watch, livereload()))
      .pipe(gulpif(!production,
        notify(function () {
          console.log('Browserify in ' + (Date.now() - start) + 'ms')
        })))
  };

  // Add watchify
  if (options.watch) {
    bundler = watchify(bundler);
    bundler.on('update', rebundle)
  }

  // Run the vendors bundle when the default Gulp task starts
  vendorBundler.bundle()
    .pipe(source('vendors.js'))
    .pipe(gulpif(options.uglify, streamify(uglify())))
    .pipe(gulp.dest(options.dest));

  return rebundle();

};