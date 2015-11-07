angular.module('shortly.links', [])

.controller('LinksController', ['$scope', 'Links', function ($scope, Links) {
  // contains JSON objects as returned to us by our server (of link documents)
  $scope.links = [{"url":"http://www.google.com", "title":"Google", "visits": "2"}];
}]);
