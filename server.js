const
	colors 		= require('colors'),
	_env 		= require(__dirname + '/_env')
;


/*************************************************/

// www ui server
wwwExpressApp = require(_env.dir.project + '/express/www');
wwwExpressApp.listen(_env.ports.www, function(){
	console.log(colors.green("www server is up on port " + _env.ports.www));
});