/* global describe, it */

'use strict';

var assert = require('assert');
var file = require('./utils.js').file;
var ext = require('../');

describe('crop', function () {
    it('should crop extension', function (cb) {
        var stream = ext.crop();

        stream.on('data', function (file) {
            assert.equal(file.relative, 'file');
        });

        stream.on('end', cb);
        stream.write(file('file.ext'));
        stream.end();
    });

    it('should crop explicit extension', function (cb) {
        var stream = ext.crop('ext');

        stream.on('data', function (file) {
            assert.equal(file.relative, 'file');
        });

        stream.on('end', cb);
        stream.write(file('file.ext'));
        stream.end();
    });

    it('should crop file without extension', function (cb) {
        var stream = ext.crop();

        stream.on('data', function (file) {
            assert.equal(file.relative, 'file');
        });

        stream.on('end', cb);
        stream.write(file('file'));
        stream.end();
    });

    it('should not crop extension, if it different from argument', function (cb) {
        var stream = ext.crop('ext');

        stream.on('data', function (file) {
            assert.equal(file.relative, 'file.js');
        });

        stream.on('end', cb);
        stream.write(file('file.js'));
        stream.end();
    });

});
