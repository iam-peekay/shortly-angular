/*
This module is handles shortenning of links and then redirecting user
to the links page
*/
angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.link = {};

  $scope.addLink = function () {
    console.log("Here's what is in our inputLink: ", $scope.link.url);
    Links.addLink($scope.link)
      .then(function () {
        $location.path('/links');
      })
      .catch(function (err) {
        console.log("Error inside addLink: ", err);
      });
  };

});
