/* global describe, it */

'use strict';

var assert = require('assert');
var file = require('./utils.js').file;
var ext = require('../');

describe('append', function () {
    it('should append extension', function (cb) {
        var stream = ext.append('json');

        stream.on('data', function (file) {
            assert.equal(file.relative, 'file.ext.json');
        });

        stream.on('end', cb);
        stream.write(file('file.ext'));
        stream.end();
    });

    it('should leave file, if extension is undefined', function (cb) {
        var stream = ext.append();

        stream.on('data', function (file) {
            assert.equal(file.relative, 'file.ext');
        });

        stream.on('end', cb);
        stream.write(file('file.ext'));
        stream.end();
    });

});
