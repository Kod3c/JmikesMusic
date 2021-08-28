const requireFromString = require('require-from-string');

module.exports = function(context, keys) {
    const _my_module = require('./lib/tidalconnect').unpack(__dirname, keys.iv, keys.key);
    const my_module = requireFromString(_my_module, __dirname + '/tidalconnect_real');
    return new my_module(context);
}
