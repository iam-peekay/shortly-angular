/*
This contains our Links factory and Auth factory.
We separate out the two factories to allow for seperation of concerns
AND so that multiple controllers can share these common functions and only inject the ones which the controller needs
*/
angular.module('shortly.services', [])

.factory('Links', function ($http) {
  // Expect fetchLinks to return the JSON object
  var getLinks = function () {
    return $http({
      method: 'GET',
      url: '/api/links/'
    })
    .then(function (resp) {
      console.log('response data from inside fetchLinks: ', resp.data);
      return resp.data;
    });
  };

  // Sends a new link to the server to be added
  var addLink = function (link) {
    return $http({
      method: 'POST',
      url: '/api/links/',
      data: link
    });
  };

  return {
    getLinks: getLinks,
    addLink: addLink
  };

})
.factory('Auth', function ($http, $location, $window) {
  // This Auth service is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
});
