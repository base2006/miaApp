angular.module('starter.controllers', [])

.controller('appCtrl', function($scope, $ionicHistory){

	// var calcWidth = document.getElementById('oef').offsetWidth;
	// document.getElementById('oef').style.height = calcWidth + 'px';
	$scope.goHome = function() {
		$location.path('/home');
	}


})

.controller('homeCtrl', function($scope, $ionicHistory) {

})

.controller('uitlegCtrl', function($scope, $ionicHistory) {
	//Go back to previous view
	$scope.goBack = function() {
		$ionicHistory.goBack();
	}
})

.controller('oefeningCtrl', function($scope, $ionicHistory) {
	//Go back to previous view
	$scope.goBack = function() {
		$ionicHistory.goBack();
	}

})

.controller('antwoordCtrl', function($scope, $ionicHistory) {
	//Go back to previous view
	$scope.goBack = function() {
		$ionicHistory.goBack();
	}
})

.controller('scoreCtrl', function($scope, $ionicHistory) {
	//Go back to previous view
	$scope.goBack = function() {
		$ionicHistory.goBack();
	}
})

;