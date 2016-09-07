var assert = require('chai').assert;

var removeQueryParameterByNameAndValue = require(__dirname + '/../../src/url/removeQueryParameterByNameAndValue');

describe('removeQueryParameterByNameAndValue', function () {

    it('should do nothing if no parameters at all', function () {
        var url = 'http://example.com';

        var result = removeQueryParameterByNameAndValue('test', 'test', url);

        assert.equal(result, url);
    });

    it('should do nothing if no parameter exist', function () {
        var url = 'http://example.com?one=two&one=two';

        var result = removeQueryParameterByNameAndValue('test', 'test', url);

        assert.equal(result, url);
    });

    it('should remove parameter if only one exist', function () {
        var url = 'http://example.com?test=test';

        var result = removeQueryParameterByNameAndValue('test', 'test', url);

        assert.equal(result, 'http://example.com?');
    });

    it('should remove parameter if more params after', function () {
        var url = 'http://example.com?test=test&one=two&two=one';

        var result = removeQueryParameterByNameAndValue('test', 'test', url);

        assert.equal(result, 'http://example.com?one=two&two=one');
    });

    it('should remove parameter if more params before', function () {
        var url = 'http://example.com?one=two&two=one&test=test';

        var result = removeQueryParameterByNameAndValue('test', 'test', url);

        assert.equal(result, 'http://example.com?one=two&two=one');
    });

    it('should remove parameter if more params before and after', function () {
        var url = 'http://example.com?one=two&two=one&test=test&three=four&five=six';

        var result = removeQueryParameterByNameAndValue('test', 'test', url);

        assert.equal(result, 'http://example.com?one=two&two=one&three=four&five=six');
    });

    it('should remove parameter if more params before and after and array params', function () {
        var url = 'http://example.com?one=two&two=one&test=test&three[]=four&five[]=six';

        var result = removeQueryParameterByNameAndValue('test', 'test', url);

        assert.equal(result, 'http://example.com?one=two&two=one&three[]=four&five[]=six');
    });

});
