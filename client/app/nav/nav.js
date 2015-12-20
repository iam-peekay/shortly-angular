/*
angular directive to show the nav bar view
*/
angular.module('shortly.nav', [])
.directive('navBar', function () {
  return {
    restrict: 'E',
    templateUrl: 'app/nav/nav.html'
  };
});
