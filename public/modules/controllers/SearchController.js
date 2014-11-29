(function() {

  // Fix to define function above, do inject, and then add controller to module

  angular.module('freshTomatoesApp').controller('SearchController', function($scope, $timeout, $log, searchFactory) {

    $scope.resultsField = false;
    $scope.movies = [];

    $scope.searchRT = function() {

      if ($scope.searchQuery) {

        $scope.searchResults = [];
        searchFactory.getMovies($scope.searchQuery, function(error, data) {
          if (!error) {
            $scope.resultsField = true;

            for (var i = 0; i < 10; i++) {
              (function(j) {
                $timeout(function() {
                  $scope.searchResults.push(data.movies[j]);
                }, 100 * i);
              })(i);
            }
          }
        });

        $scope.searchQuery = '';

      }

    }

    $scope.movieLookup = function(movieId) {

      searchFactory.getMovie(movieId, function(error, data) {
        if (!error) {
          $scope.movies.push(data);
        }
      });

    }

  });

}());
