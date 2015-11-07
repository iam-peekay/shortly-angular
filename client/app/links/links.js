angular.module('shortly.links', [])

.controller('LinksController', ['$scope', 'Links', function ($scope, Links) {
  // contains JSON objects as returned to us by our server (of link documents)

  $scope.data = [];

  $scope.getLinks = function () {
    // hit the server with a get request to /api/links using the "fetchLinks" method
    // in our factory

    Links.getLinks()
    .then(function(data) {
      $scope.data.links = data;
    });

  };

  $scope.init = function() {
    $scope.getLinks();
  };

  $scope.init();

}]);
