angular
.module('project', [
	'ui.router',
	'thatisuday.ui-stater',
	'ngMeta',
	'ngAnimate',
	'headroom'
]);

// routing
angular
.module('project')
.config(['$locationProvider', '$urlRouterProvider', 'ngMetaProvider',
	function($locationProvider, $urlRouterProvider, ngMetaProvider){
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
}]);