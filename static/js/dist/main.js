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
angular
.module('project')
.config(['$stateProvider', function($stateProvider){
	$stateProvider
	
	// home (landing) page
	.state('home', {
		url : '/',
		controller : 'homeCtrl',
		templateUrl : '/static/templates/dist/home.html',
		data : {
			meta: {
				title: '',
				description : ''
			}
		}
	})
	;
}]);
angular
.module('project')
.run(['$rootScope', 'ngMeta', function($rootScope, ngMeta){
	// initialize meta tags
	ngMeta.init();

	// show body
	$rootScope.bootstrapped = true;

	// ...todo
}]);
angular
.module('project')
.controller('homeCtrl', ['$scope', function($scope){
	$scope.message = 'This is home controller!';
}]);