angular.module('starter.controllers', [])

.controller('appCtrl', function($scope, $ionicHistory){

	// var calcWidth = document.getElementById('oef').offsetWidth;
	// document.getElementById('oef').style.height = calcWidth + 'px';
	$scope.goHome = function() {
		$state.go('home');
	}

	//Go back to previous view
	$scope.goBack = function() {
		$ionicHistory.goBack();
	}

	$scope.gehoorArray = [
		{
			id: 0,
			name: "exercise 1",
			description: "description",
			opdrachten: [
				{
					id: 0,
					beschrijving: "Hier staat beschrijving van opdracht 1",
					vraag: "Blablabla vraag 1",
					antwoord: "440" 
				},
				{
					id: 1,
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

	$scope.ritmeArray = [
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

})

.controller('homeCtrl', function($scope) {

})

.controller('uitlegCtrl', function($scope, $stateParams) {
	$scope.oefening = $scope.gehoorArray[$stateParams.id];
})

.controller('oefeningCtrl', function($scope, $stateParams, $log) {
	$scope.oefening = $scope.gehoorArray[$stateParams.id];
	$scope.ritme = $scope.ritmeArray[$stateParams.id];

	$scope.freq = 0;

	// show frequency
	//$scope.onAudiofrequency = function(e){
    function onAudiofrequency(e) {
    	$log.info("success");
        document.getElementById('freq').innerHTML = ("Frequency: " + e.frequency + " Hz");
    }

	$scope.frequency = function() {
		window.addEventListener("audiofrequency", onAudiofrequency, false);
		$scope.freq = 440;
    }

    $scope.stop = function() {
    	window.removeEventListener("audiofrequency", onAudiofrequency, false);
    }

/*	// Record audio
	var src = "myrecording.amr";

	var mediaRec = new Media(src,
	        // success callback
	        function() {
	            $log.info("recordAudio():Audio Success");
	        },

	        // error callback
	        function(err) {
	            $log.error("recordAudio():Audio Error: "+ err.message);
	        },

	        function(status){
	            $log.info('status changed: ', status);
	        });

	function recordAudio() {
	    // Record audio
	    mediaRec.startRecord();
	    // stoprecording after 10 seconds
	    setTimeout(function() {
	        mediaRec.stopRecord();
	    }, 3000);
	}

	function playAudio() {
	    // Play the audio file at url
	    var my_media = new Media(src,
	        // success callback
	        function () {
	            console.log("playAudio():Audio Success");
	        },
	        // error callback
	        function (err) {
	            console.log("playAudio():Audio Error: " + err);
	            console.log(err);
	        }
	    );
	    // Play audio
	    console.log(my_media);
	    my_media.play();
	    console.log(my_media);
	}
*/})

.controller('antwoordCtrl', function($scope, $stateParams, $location) {
	$scope.oefening = $scope.gehoorArray[$stateParams.id];


	$scope.nextOefening = function() {
		var url = "/oefening/" + (parseInt($stateParams.id) + 1);
		$location.url(url);
	}

})

.controller('scoreCtrl', function($scope) {

})

;