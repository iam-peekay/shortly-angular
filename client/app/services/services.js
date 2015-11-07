angular.module('shortly.services', [])

.factory('Links', function ($http) {

  // Expect fetchLinks to return the JSON object
  var getLinks = function () {
    return $http({
      method: 'GET',
      url: '/api/links'
    })
    .then(function (resp) {
      console.log('response data from inside fetchLinks: ', resp.data);
      return resp.data;
    });
  };

  var addLink = function (link) {
    // add a link using our $http post request;
    return $http({
      method: 'POST',
      url: '/api/links',
      data: link
    });
  };

  var navToLink = function (code) {
    return $http({
      method: 'GET',
      url: "/api/:code"
    })
    .then(function () {
      console.log('nav link executed');
    });
  };

  return {
    getLinks: getLinks,
    addLink: addLink,
    navToLink: navToLink
  };

})
.factory('Auth', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
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
    console.log('INSIDE WINDOW LOCALSTORAGE: ', $window.localStorage);
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
