(function() {

  var searchFactory = function($http, $log) {

    return {

      // Don't forget to url encode the query
      getMovies: function(query, callback) {
        $http.jsonp('http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=k2mrwxaafkd7p8z3zvyp6jcp&callback=JSON_CALLBACK', { params: { q: query } })
          .success(function (data) {
            callback(null, data);
          })
          .error(function (error) {
            callback(error);
          });
      },

      getMovie: function(url, callback) {

        $http.get('/api/movie/')
          .success(function (data) {
            callback(null, data);
            $log.log(data);
          })
          .error(function (error) {
            callback(error);
          })

      }

    }

  };

  searchFactory.$inject = ['$http', '$log'];

  angular.module('freshTomatoesApp').factory('searchFactory', searchFactory);

})();