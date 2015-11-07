angular.module('shortly.links', [])

.controller('LinksController', ['$scope', '$location', 'Links', 'Auth', function ($scope, $location, Links, Auth) {
  // contains JSON objects as returned to us by our server (of link documents)
  $scope.data = [];

  $scope.getLinks = function () {
    console.log('***********AUTH AUTH AUTH*******', Auth.isAuth());
    if (!!!Auth.isAuth()) {
      $location.path('/signin');
    } else {
      Links.getLinks()
      .then(function (data) {
        $scope.data.links = data;
      });
    }
  };

  $scope.init = function () {
    $scope.getLinks();
  };

  $scope.signout = function () {
    Auth.signout();
  };

  $scope.init();

}]);
