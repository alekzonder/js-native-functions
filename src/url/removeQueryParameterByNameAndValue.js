/**
 * simple
 */
module.exports = function (name, value, url) {
    var replaceAmp = '&' + name + '=' + encodeURIComponent(value);
    var replace = name + '=' + encodeURIComponent(value);

    url = url.replace(replaceAmp, '');
    url = url.replace(replace, '');

    url = url.replace('?&', '?');

    url = url.replace(/\?$/, '');

    return url;
};
