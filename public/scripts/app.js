'use strict';

/**
 * @ngdoc overview
 * @name movieListAppApp
 * @description
 * # movieListAppApp
 *
 * Main module of the application.
 */
angular
  .module('movieListAppApp', ['ngRoute'])
  .config(function($routeProvider,$locationProvider){
  	$routeProvider
  	.when('/',{
      templateUrl : '/views/home.html'
    })
    .when('/contacts',{
  		templateUrl : '/views/contact.html'
  	})
  	.when('/resume',{
  		templateUrl : '/views/resume.html'
  	})
  	.when('/articles',{
  		templateUrl : '/views/articles.html'
  	})
  	.when('/about',{
      templateUrl : '/views/about.html'
    })
  	.otherwise({
  		redirect : '/'
  	});
      $locationProvider.html5Mode(true);
  });
