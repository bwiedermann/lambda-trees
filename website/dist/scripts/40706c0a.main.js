"use strict";var lambdaTreesApp=angular.module("lambdaTreesApp",[]);lambdaTreesApp.controller("VisController",["$scope",function(a){function b(a){return void 0!==a.line&&void 0!==a.column?"Line "+a.line+", column "+a.column+": "+a.message:a.message}a.displayExpression=function(){var c;try{c=parse(a.expression),a.errorMessage="",drawTree("#tree-vis",c)}catch(d){a.errorMessage=b(d)}}}]);