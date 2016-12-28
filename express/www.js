const
	_ 				= 	require('lodash'),
	express 		= 	require('express'),
	bodyParser 		= 	require('body-parser'),
	compression 	= 	require('compression'),
	glob 			= 	require('glob'),
	_env 			= 	require(__dirname + '/../_env')
;


/****************************************/


var app = express();
app.set('json spaces', 4);
app.use(bodyParser.json({limit: '50mb'}));
app.use(compression());

// set appropriate headers
app.use(function(req, res, next){
	res.set({
		'x-powered-by' : 'thatisuday',
		'Access-Control-Allow-Origin' : '*',
		'Access-Control-Allow-Headers' : req.get("Access-Control-Request-Headers"),
		'Access-Control-Allow-Methods' : 'GET, POST, PUT, DELETE, OPTIONS'
	});
	
	next();
});


/****************************************/

// Server static files from static folder
app.use('/static', express.static(_env.dir.project + '/static'), (req, res) => res.sendStatus(404));

// Send all requests to `index.html`
app.use('*', (req, res) => {
	res.sendFile(_env.dir.project + '/index.html');
});

/****************************************/


module.exports = exports = app;
