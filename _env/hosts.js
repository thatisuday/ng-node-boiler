const
	ports = require(__dirname + '/ports')
;

/*************************************************/

var protocol = (process.NODE_ENV == 'production') ? 'http://' : 'http://';

/*************************************************/

// www host
exports.www = (process.NODE_ENV == 'production') ? protocol + 'www.example.com' : protocol + '127.0.0.1:' + ports.api;