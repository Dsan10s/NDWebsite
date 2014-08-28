var ndapp = angular.module('ndapp');

ndapp.controller('loginController', function($scope, ndService) {

  // Public /////////////////////////////////////////////////////////

  var public = $scope.viewModel = {

  }

  var setViewModel = function() {}

  // Private ////////////////////////////////////////////////////////

  var private = (function() {
    return {

    }
  })();

  var helpers = (function() {
 
    function sizingJS() {}

    function responsiveJS() {
      sizingJS();
    }

    return {
      sizingJS: sizingJS, 
      responsiveJS: responsiveJS
    }
  })();

  var init = (function() {
    setViewModel();

    helpers.sizingJS();
    $(window).resize(function() {
      helpers.responsiveJS();
    });

    eventHandlers();
  })();

  function eventHandlers() {
    
  }
});