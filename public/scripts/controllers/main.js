'use strict';

/**
 * @ngdoc function
 * @name movieListAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the movieListAppApp
 */
angular.module('movieListAppApp')
  .controller('MainCtrl', function ($scope,$window) {
  	var scope=$scope;
    scope.IsPageShrink=false;
    scope.showMenu = function(){
      scope.IsPageShrink = !scope.IsPageShrink;
    }
    scope.redirectToUrl = function(link){
      $window.location.href=link;
    }
  	// scope.waitFlag=true;
  	// sessionFactory.then(function(){
  		
  	// 	scope.movies=[];
  	// 	scope.refreshList=function(){
  	// 		movieFactory.getMovies().then(function(data){
  	// 		scope.waitFlag=false;
  	// 		scope.movies=JSON.parse(data);

  	// 		console.log(scope.movies[0].movie_title);
  	// 	});
  	// };
  	// scope.refreshList();

  	// });
    

  });
