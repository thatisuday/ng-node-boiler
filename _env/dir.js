const
	path = require('path')
;

/*************************************************/

// project directory
var projectDir = exports.project = path.resolve(__dirname + '/../');

/*************************************************/

// project static directories
exports.static = {
	bower 		: path.resolve(projectDir + '/static/bower_components'),
	img 		: path.resolve(projectDir + '/static/img'),
	js 			: path.resolve(projectDir + '/static/js'),
	scss 		: path.resolve(projectDir + '/static/scss'),
	templates 	: path.resolve(projectDir + '/static/templates')
}