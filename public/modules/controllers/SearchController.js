(function() {

  // Fix to define function above, do inject, and then add controller to module

  angular.module('freshTomatoesApp').controller('SearchController', function($scope, $timeout, $log, searchFactory) {

    $scope.resultsField = false;
    $scope.moviesField = false;
    $scope.movies = [];

    $scope.searchRT = function() {

      if ($scope.searchQuery) {

        $scope.searchResults = [];
        searchFactory.getMovies($scope.searchQuery, function(error, data) {
          if (!error) {
            $scope.resultsField = true;
            var length = data.movies.length > 10 ? 10 : data.movies.length;

            for (var i = 0; i < length; i++) {
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

    $scope.addMovie = function(movie) {

      searchFactory.getMovie(movie.links.alternate, function(error, data) {
        if (!error) {

          $log.log(data);

        }
      });


      movie.ratings.critics_score = movie.ratings.critics_score == -1 ? '--' : movie.ratings.critics_score + '%';
      $scope.movies.push(movie);

      $scope.moviesField = true;
    }

    $scope.deleteMovie = function(movie) {
      $scope.movies.splice($scope.movies.indexOf(movie), 1);
    }

  });

}());
