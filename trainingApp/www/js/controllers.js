angular.module('starter.controllers', [])

.controller('appCtrl', function($scope, $ionicHistory, $log){

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
					id: 0,
					beschrijving: "Hier staat beschrijving van opdracht 1",
					vraag: "Blablabla vraag 1",
					antwoordLaag: 430,
					antwoordHoog: 450 
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
	// $scope.ritme = $scope.ritmeArray[$stateParams.id];

    $scope.check = function() {
    	// $log.info($scope.freq);
    	if ($scope.freq >= $scope.oefening.opdrachten[0].antwoordLaag && $scope.freq <= $scope.oefening.opdrachten[0].antwoordHoog) {
    		$log.info("yes");
    	} else {
    		$log.error("epic fail");
    	}
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


	// $scope.nextOefening = function() {
	// 	var url = "/oefening/" + (parseInt($stateParams.id) + 1);
	// 	$location.url(url);
	// }

})

.controller('scoreCtrl', function($scope) {

})

;