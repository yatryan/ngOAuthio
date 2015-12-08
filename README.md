OAuth.io + AngularJS
=================
[![Build Status](https://travis-ci.org/yatryan/ngOAuthio.svg?branch=master)](https://travis-ci.org/yatryan/ngOAuthio)

Code licensed under MIT License.

Allows to use [OAuth.io](http://oauth.io/) with AngularJS

## Example

```
angular.module('myApp', []).factory('rootCtrl', function($scope, OAuth) {

    //initialize OAuth.io with public key of the application
    OAuth.initialize('public-key', {
        cache: true
    });

    var authorizationResult;

    $scope.connectTwitter = function() {
        authorizationResult = OAuth.create("twitter");
    };
});
```

## Installing via Bower
```
bower install ng-oauthio
```

## Development
It uses Karma to ensure the quality of the code. The easiest way to run these checks is to use grunt:

```sh
npm install -g grunt-cli
npm install
grunt karma
```
