// 'use strict';

// angular.module('movieListAppApp').factory('movieFactory', function ($window,$q) {
//     var indexedDB = $window.indexedDB;
//     var db = null;
//     var lastIndex = 0;

//     var open = function () {
//     	console.log("open method is being hit !");
//         var deferred = $q.defer();
//         var version = 1;
//         var request = indexedDB.open("movieData", version);

//         request.onupgradeneeded = function (e) {
//             db = e.target.result;

//             e.target.transaction.onerror = indexedDB.onerror;

//             if (db.objectStoreNames.contains("movie")) {
//                 db.deleteObjectStore("movie");
//             }

//             // var store = db.createObjectStore("movie", {
//             //     keyPath: "movie_title"
//             // });
//             var store = db.createObjectStore("movie",{autoIncrement: true});
//         };

//         request.onsuccess = function (e) {
//             db = e.target.result;
//             deferred.resolve();
//         };

//         request.onerror = function () {
//         	console.log("some error occured!");
//             deferred.reject();
//         };

//         return deferred.promise;
//     };

//     var getMovies = function () {
//         var deferred = $q.defer();

//         if (db === null) {
//             deferred.reject("IndexDB is not opened yet!");
//         } else {
//             var trans = db.transaction(["movie"], "readwrite");
//             var store = trans.objectStore("movie");
//             var movies = [];

//             // Get everything in the store;
//             //var keyRange = IDBKeyRange.lowerBound(0);
//             var cursorRequest = store.openCursor();

//             cursorRequest.onsuccess = function (e) {
//                 var result = e.target.result;
//                 if (result === null || result === undefined) {
//                     deferred.resolve(movies);
//                 } else {
//                     movies.push(result.value);
//                     result.continue ();
//                 }
//             };

//             cursorRequest.onerror = function (e) {
//                 console.log(e.value);
//                 deferred.reject("Something went wrong!!!");
//             };
//         }

//         return deferred.promise;
//     };


//     var addMovies = function (item) {
//     	//console.log("incoming item "+JSON.stringify(item));
//         var deferred = $q.defer();

//         if (db === null) {
//             deferred.reject("IndexDB is not opened yet!");
//         } else {
//             var trans = db.transaction(["movie"], "readwrite");
//             var store = trans.objectStore("movie");
//             var request = store.add(JSON.stringify(item));

//             request.onsuccess = function (e) {
//                 deferred.resolve();
//                 console.log("successfully added!");
//             };

//             request.onerror = function (e) {
//                 console.log(e.value);
//                 deferred.reject("Todo item couldn't be added!");
//             };
//         }
//         return deferred.promise;
//     };

//     return {
//         open: open,
//         getMovies: getMovies,
//         addMovies: addMovies,
//     };

// });