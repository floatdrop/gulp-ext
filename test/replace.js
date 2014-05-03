/* global describe, it */

'use strict';

var assert = require('assert');
var file = require('./utils.js').file;
var ext = require('../');

describe('replace', function () {
    it('should replace explicit extension', function (cb) {
        var stream = ext.replace('.json', '.ext');

        stream.on('data', function (file) {
            assert.equal(file.relative, 'file.json');
        });

        stream.on('end', cb);
        stream.write(file('file.ext'));
        stream.end();
    });

    it('should replace any extension', function (cb) {
        var stream = ext.replace('.json');

        stream.on('data', function (file) {
            assert.equal(file.relative, 'file.json');
        });

        stream.on('end', cb);
        stream.write(file('file.ext'));
        stream.end();
    });

    it('should append extension, if file haven`t extension', function (cb) {
        var stream = ext.replace('ext');

        stream.on('data', function (file) {
            assert.equal(file.relative, 'file.ext');
        });

        stream.on('end', cb);
        stream.write(file('file'));
        stream.end();
    });

    it('should not append extension, if file haven`t extension, but matches pattern', function (cb) {
        var stream = ext.replace('ext', 'file');

        stream.on('data', function (file) {
            assert.equal(file.relative, 'file');
        });

        stream.on('end', cb);
        stream.write(file('file'));
        stream.end();
    });

    it('should replace last part of double extension', function (cb) {
        var stream = ext.replace('.json');

        stream.on('data', function (file) {
            assert.equal(file.relative, 'file.dbl.json');
        });

        stream.on('end', cb);
        stream.write(file('file.dbl.ext'));
        stream.end();
    });

});
