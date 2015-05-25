'use strict';

var lambdaTreesApp = angular.module('lambdaTreesApp', []);

lambdaTreesApp.controller('VisController', ['$scope', function($scope) {

    // taken from: http://pegjs.org/js/online.js
    function buildErrorMessage(e) {
      return e.line !== undefined && e.column !== undefined
        ? "Line " + e.line + ", column " + e.column + ": " + e.message
        : e.message;
    }

     $scope.displayExpression = function() {
      var result;
      try {
       result = parse($scope.expression);
       $scope.errorMessage = '';
       drawTree('#tree-vis', result);
      } catch (e) {
       $scope.errorMessage = buildErrorMessage(e);
      }
     };

   }]);
