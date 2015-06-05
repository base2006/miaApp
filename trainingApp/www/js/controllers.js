angular.module('starter.controllers', [])

.controller('appCtrl', function($scope, $ionicHistory, $log){

	$scope.counter = 0;
	//$log.info("appCtrl counter =" + $scope.counter);

	// var calcWidth = document.getElementById('oef').offsetWidth;
	// document.getElementById('oef').style.height = calcWidth + 'px';
	$scope.goHome = function() {
		$state.go('home');
	}

	//Go back to previous view
	$scope.goBack = function() {
		$ionicHistory.goBack();
	}

	$scope.freq = 0;
	// show frequency
    function onAudiofrequency(e) {
        document.getElementById('freq').innerHTML = ("Frequency: " + e.frequency + " Hz");
        $scope.freq = e.frequency;
    }

	$scope.frequency = function() {
		window.addEventListener("audiofrequency", onAudiofrequency, false);
    }

    $scope.stop = function() {
    	window.removeEventListener("audiofrequency", onAudiofrequency, false);
    }


	$scope.gehoorArray = [
		{
			id: 0,
			name: "exercise 1",
			description: "description",
			opdrachten: [
				{
					second_id: 0,
					beschrijving: "Hier staat beschrijving van opdracht 1",
					vraag: "Blablabla vraag 1",
					antwoordLaag: 430,
					antwoordHoog: 450 
				},
				{
					second_id: 1,
					beschrijving: "Hier staat beschrijving van opdracht 2",
					vraag: "Blablabla vraag 2",
					antwoord: "222"
				}
			]
		},
		{
			id: 1,
			name: "exercise 2",
			description: "skjdfha"
		}
	]

/*	$scope.ritmeArray = [
		{
			id: 0,
			name: "exercise 1",
			description: "beschrijving",
			opdrachten: [
				{
					id: 0,
					beschrijving: "opdracht beschrijving",
					vraag: "vraag hier",
					antwoord: "antwoord"
				}
			]
		}
	]
*/
})

.controller('homeCtrl', function($scope) {
	$scope.counter = 0;
})

.controller('uitlegCtrl', function($scope, $stateParams) {
	$scope.oefening = $scope.gehoorArray[$stateParams.id];
})

.controller('oefeningCtrl', function($scope, $stateParams, $log, $ionicPlatform) {
	$scope.oefening = $scope.gehoorArray[$stateParams.id];
	// $scope.ritme = $scope.ritmeArray[$stateParams.id];

    $scope.check = function() {
    	// $log.info($scope.freq);
    	if ($scope.freq >= $scope.oefening.opdrachten[$scope.counter].antwoordLaag && $scope.freq <= $scope.oefening.opdrachten[$scope.counter].antwoordHoog) {
    		$log.info("yes");
    	} else {
    		$log.error("epic fail");
    	}
    }

	$ionicPlatform.registerBackButtonAction(function (event) {
        event.preventDefault();
    }, 100);


})

.controller('antwoordCtrl', function($scope, $stateParams, $location, $ionicPlatform, $log) {
	$scope.oefening = $scope.gehoorArray[$stateParams.id];

	$scope.nextOefening = function() {
		$scope.counter++;
		var url = "/oefening/" + (parseInt($stateParams.id) + "/" + $scope.counter);
		$location.url(url);
	}

})

.controller('scoreCtrl', function($scope, $ionicPlatform) {

})

;