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