(function() {

  var searchFactory = function($http) {

    return {

      // Don't forget to url encode the query
      getMovies: function(query, callback) {
        $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=k2mrwxaafkd7p8z3zvyp6jcp&callback=JSON_CALLBACK', { params: { q: query } })
          .success(function (data) {
            callback(null, data);
          })
          .error(function (e) {
            callback(e);
          });
      },

      getMovie: function(movieId, callback) {
        $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies/' + movieId + '.json?apikey=k2mrwxaafkd7p8z3zvyp6jcp&callback=JSON_CALLBACK')
          .success(function (data) {
            callback(null, data);
          })
          .error(function (e) {
            callback(e);
          });
      }

    }

  };

  searchFactory.$inject = ['$http'];

  angular.module('freshTomatoesApp').factory('searchFactory', searchFactory);

})();