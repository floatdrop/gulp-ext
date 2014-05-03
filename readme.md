# [gulp](http://gulpjs.com)-ext [![Build Status](https://travis-ci.org/floatdrop/gulp-ext.svg?branch=master)](https://travis-ci.org/floatdrop/gulp-ext)

> File extension utility

Help replace / crop / append file extensions.

## Install

```bash
$ npm install --save-dev gulp-ext
```


## Usage

```js
var gulp = require('gulp');
var ext = require('gulp-ext');

gulp.task('default', function () {
	return gulp.src('src/app.json')
		.pipe(ext.append('bak'))
		.pipe(gulp.dest('dist'));
});
```


## API


### ext.append([extension])

Type: `String`  
Default: `undefined`

Appends extension.

### ext.crop([extension])

Removes only extension, that passed as first argument. If not - crops any extension (`app.ext.bak` -> `app.ext`).

### ext.replace(extension[, pattern])

Replaces whole extension on `extension` argument or only matching pattern.

## License

MIT © [Vsevolod Strukchinsky](https://github.com/floatdrop)
