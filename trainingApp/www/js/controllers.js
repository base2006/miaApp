angular.module('starter.controllers', [])

.controller('appCtrl', function($scope, $ionicHistory, $log, counterService){

	$scope.counter = 0;
	//$log.info("appCtrl counter =" + $scope.counter);

	// var calcWidth = document.getElementById('oef').offsetWidth;
	// document.getElementById('oef').style.height = calcWidth + 'px';
	$scope.goHome = function() {
		$ionicHistory.clearHistory();
		counterService.reset();
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
		$log.info(e.frequency);
		$scope.freq = e.frequency;
	}

	$scope.frequency = function() {
		window.addEventListener("audiofrequency", onAudiofrequency, false);
	}

	$scope.stop = function() {
		window.removeEventListener("audiofrequency", onAudiofrequency, false);
	}

	$scope.antwoorden = [
	{
		id: 0,
		antwoordLaag: 430,
		antwoordHoog: 450,
		uitleg: "Een terts is de afstand van de 1e toon van een toonladder naar de 3e. Er zijn 2 verschillende tertsen, een grote en een kleine. Een grote terts bestaat uit 2 hele afstanden, en een kleine terts bestaat uit een hele en een halve afstand."
	},
	{
		id: 1,
		antwoordLaag: 483,
		antwoordHoog: 503,
		uitleg: "Een sext is de afstand van de 1e toon van een toonladder naar de 6e. Er zijn weer twee verschillende, een grote en een kleine. Een grote sext bestaat uit een kwint en een hele afstand, en een kleine sext bestaat uit een kwint en een halve afstand."	
	},
	{
		id: 2,
		antwoordLaag: 319,
		antwoordHoog: 339,
		uitleg: "Een secunde is de afstand van de 1e toon van een toonladder naar de 2e. Er zijn twee verschillende secundes, een grote en een kleine. Een grote secunde bestaat uit een hele afstand, en een kleine secunde bestaat uit een halve afstand. Let op: Als je een kleine secunde zoekt maakt het niet uit of je een majeur of een mineur toonladder maakt. In beide toonladders is de secunde groot. Deze moet je zelf verlagen!"

	},
	{
		id: 3,
		antwoordLaag: 483,
		antwoordHoog: 503,
		uitleg: "Een kwart is de afstand van de 1e toon van een toonladder naar de 4e. Het maakt niet uit of je een majeur of een mineur toonladder maakt."
	},
	{
		id: 4,
		antwoordLaag: 513,
		antwoordHoog: 533,
		uitleg: "Een terts is de afstand van de 1e toon van een toonladder naar de 3e. Er zijn 2 verschillende tertsen, een grote en een kleine. Een grote terts bestaat uit 2 hele afstanden, en een kleine terts bestaat uit een hele en een halve afstand."
	},
	{
		id: 5,
		antwoordLaag: 301,
		antwoordHoog: 323,
		uitleg: "Een secunde is de afstand van de 1e toon van een toonladder naar de 2e. Er zijn twee verschillende secundes, een grote en een kleine. Een grote secunde bestaat uit een hele afstand, en een kleine secunde bestaat uit een halve afstand. Let op: Als je een kleine secunde zoekt maakt het niet uit of je een majeur of een mineur toonladder maakt. In beide toonladders is de secunde groot. Deze moet je zelf verlagen!"
	},
	{
		id: 6,
		antwoordLaag: 513,
		antwoordHoog: 533,
		uitleg: "Een septiem is de afstand van de 1e toon van een toonladder naar de 7e. Er bestaat een groot en een klein septiem."
	},
	{
		id: 7,
		antwoordLaag: 381,
		antwoordHoog: 401,
		uitleg: "Een kwint is de afstand van de 1e toon van een toonladder naar de 5e. Het maakt niet uit of je een majeur of een mineur toonladder maakt."
	},
	{
		id: 8,
		antwoordLaag: 577,
		antwoordHoog: 597,
		uitleg: "Een sext is de afstand van de 1e toon van een toonladder naar de 6e. Er zijn weer twee verschillende, een grote en een kleine. Een grote sext bestaat uit een kwint en een hele afstand, en een kleine sext bestaat uit een kwint en een halve afstand."
	},
	{
		id: 9,
		antwoordLaag: 381,
		antwoordHoog: 401,
		uitleg: "Een kwart is de afstand van de 1e toon van een toonladder naar de 4e. Het maakt niet uit of je een majeur of een mineur toonladder maakt."
	}
	]

	$scope.gehoorArray = [
	{
		id: 0,
		name: "Intervallen",
		description: "In de volgende opdrachten hoort u een aantal tonen en krijgt u per toon een vraag. U kunt antwoord geven met de record knop.",
		opdrachten: [
		{
			second_id: 0,
			beschrijving: "Hier staat beschrijving van opdracht 1",
			vraag: "Zing de grote terts van de noot die u hoort, en neem deze op met de record knop",
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

})

.controller('uitlegCtrl', function($scope, $stateParams, $location) {
	//$scope.oefening = $scope.gehoorArray[$stateParams.id];
	$scope.naarOefening = function(nummer) {
		var url = "/oefening" + nummer;
		$location.url("/oefening1");		
	}
})

.controller('oefeningCtrl', function($scope, $rootScope, $stateParams, $log, $ionicPlatform, $location, myService, counterService) {
	//$scope.oefening = $scope.gehoorArray[$stateParams.id];
	// $scope.ritme = $scope.ritmeArray[$stateParams.id];
	$scope.antwoord = $scope.antwoorden;

	// Record audio
	$scope.playAudio = function (tone) {
		// function playAudio() {
	    // Play the audio file at url
	    var src = "/android_asset/www/Tones/" + tone + ".wav";
		// $log.info(src);

		var my_media = new Media(src,
	        // success callback
	        function () {
	        	$log.info("playAudio():Audio Success");
	        },
	        // error callback
	        function (err) {
	        	$log.error("playAudio():Audio Error: " + err);
	        	$log.error(err);
	        }
	        );
	    // Play audio
	    // $log.info(my_media);
	    my_media.play();
	}

	$scope.check = function(nummer) {
    	// $log.info($scope.freq);
    	// old
    	// if ($scope.freq >= $scope.oefening.opdrachten[$scope.counter].antwoordLaag && $scope.freq <= $scope.oefening.opdrachten[$scope.counter].antwoordHoog) {
    	// 	$log.info("success");
    	// 	myService.set("juist");
    	// } else {
    	// 	$log.error("failure not correct note");
    	// }

    	if ($scope.freq >= $scope.antwoord[nummer].antwoordLaag && $scope.freq <= $scope.antwoord[nummer].antwoordHoog) {
    		myService.set("juist");
    		counterService.count();
    	} else {
    		$log.error("failure not the correct note");
    		myService.set("onjuist");
    	}
    }

    $scope.naarAntwoord = function(nummer) {
	 // 	var url = "/antwoord/" + $scope.oefening.id + "/" + $scope.oefening.opdrachten[0].second_id;
		// $location.url(url);

		var url = "/antwoord" + nummer;
		$location.url(url);
	}

	$ionicPlatform.registerBackButtonAction(function (event) {
		event.preventDefault();
	}, 100);


})

.controller('antwoordCtrl', function($scope, $stateParams, $location, $ionicPlatform, $log, myService, counterService) {
	//$scope.oefening = $scope.gehoorArray[$stateParams.id];
	$scope.antwoord = $scope.antwoorden;

	$log.info(myService.get());

	if (myService.get() == "juist") {
		angular.element('.check-img').css('background-image', 'url("../img/icons/check.svg")');
	}

	$scope.nextOefening = function(nummer) {
		// $scope.counter++;
		// var url = "/oefening/" + (parseInt($stateParams.id) + "/" + $scope.counter);
		// $log.info(url);
		// $location.url(url);

		var url = "/oefening" + nummer;
		$location.url(url);
	}

	$scope.naarScore = function() {
		$location.url("/score");
	}

})

.controller('scoreCtrl', function($scope, $ionicPlatform, $log, counterService) {
	$scope.score = counterService.get();
})

app.factory('myService', function() {
	var savedData = {}
	function set(data) {
		savedData = data;
	}
	function get() {
		return savedData;
	}

	return {
		set: set,
		get: get
	}

})

.factory('counterService', function($log) {
	var counterService = this;
	var counter = 0;

	counterService.reset = function() {
		counter = 0;
	}

	counterService.count = function() {
		counter++;
		$log.info(counter);
	};

	counterService.get = function() {
		return counter;
	}

	return counterService;
})
;