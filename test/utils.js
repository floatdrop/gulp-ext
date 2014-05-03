'use strict';

var gutil = require('gulp-util');
var path = require('path');

module.exports = {
    file: function file(name) {
        return new gutil.File({
            base: __dirname,
            path: path.join(__dirname, name),
            contents: new Buffer('unicorns')
        });
    }
};
