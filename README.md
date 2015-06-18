# Conservatory training application

## Purpose ##
This application is developed for people who want to apply for the Music Conservatory and want to prepare for the music theory intake.

## UI/Framework ##

The UI of the app is based on Ionic Framework with some added changes using Sass. We chose this framework because it's relatively easy to work with and has some serious power. It also does a lot of work for you, it generates all splash screens from a single image, it has live reload so you can see what you're changing and the comand line tools are easy to use. It has a large css library and stock icons. This basic UI elements look clean and stylish and the styles are easy to change using Sass.

## Plugins ##

**cordova-plugin-media** by apache is what we are using to play the music notes that the users hear.

**com.cellules.cordova.audiofrequency** by Cellules is what we are using to check the frequency recorded by the microphone. We use this information to let the user answer questions by singing into the microphone.

## Backend ##
This are a few highlights in our code we thought were interesting to point out.

SCORE CHECK

Here we made a function which checks the score of the user and returns a value which will change the content.
```
//angularJS
$scope.scoreCheck = function() {
		if (counterService.get() <= 5) {
			return 0;
		} else if (counterService.get() > 5 && counterService.get() < 9) {
			return 1;
		} else {
			return 2;
		}
	}
```

```
//html
<p class="advies slecht" ng-if="scoreCheck() == 0">
...
</p>
<p class="advies voldoende" ng-if="scoreCheck() == 1">
...
</p>
<p class="advies goed" ng-if="scoreCheck() == 2">
...
</p>
```

COUNTER

This code shows the function which does 3 things:
1. .reset   resets the counter to 0.
2. .count   adds 1 to the counter and logs it in the console.
3. .get     returns the current value of the counter.

angularJS
```
app.factory('counterService', function($log) {
	var counterService = this;
	var counter = 0;
	counterService.reset = function() {
		counter = 0;
	}
	counterService.count = function() {
		counter++;
		$log.info(counter);
	}
	counterService.get = function() {
		return counter;
	}
	return counterService;
})
```
