# <img src="logo.png" width="236" height="72" />

The official webpage for the Android app [Audio Profiles](https://audioprofiles.herokuapp.com/). It also contains a [Guide](https://audioprofiles.herokuapp.com/guide/) for every section of the app.

## Usage
Install dependencies using:

```
npm install
```

### Developing

For developing (including livereload) just use:

```
npm install -g gulp
gulp
```

Our using the local dependency:

```
node_modules/gulp/bin/gulp.js
```

App will load into http://localhost:3000.

### Production 

To build the app for production:

```
npm install -g gulp
gulp build
```

Our using the local dependency:

```
node_modules/gulp/bin/gulp.js build
```