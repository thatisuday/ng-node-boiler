angular
.module('project')
.run(['$rootScope', 'ngMeta', function($rootScope, ngMeta){
	// initialize meta tags
	ngMeta.init();

	// show body
	$rootScope.bootstrapped = true;

	// ...todo
}]);