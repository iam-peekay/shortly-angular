angular.module('shortly.links', [])

.controller('LinksController', ['$scope', 'Links', function ($scope, Links) {
  // contains JSON objects as returned to us by our server (of link documents)

  // TODO: links currently contains a demo JSON object
  $scope.data = [];
  $scope.getLinks = function() {
    //code to getLinks
  };

  // {
  //   "url": "http://www.google.com",
  //   "title": "Google",
  //   "visits": "2"
  //   }
}]);
