(function() {

  // Fix to define function above, do inject, and then add controller to module

  angular.module('freshTomatoesApp').controller('SearchController', function($scope, $timeout, $log, searchFactory) {

    $scope.searchResults = [];
    $scope.movies = [];

    $scope.searchRT = function() {

      searchFactory.getMovies($scope.searchQuery, function(error, data) {
        if (!error) {
          // $scope.searchResults = data.movies;

          for (var i = 0; i < 5; i++) {

            (function(j) {
              // var counter = i;
              $timeout(function() {
                // $scope.searchResults.push('bananas');
                $log.log(j);
                $scope.searchResults.push(data.movies[j].title);
              }, 100 * i);
            })(i);

          }
        }
      });

      $scope.searchQuery = '';
    }

  });

}());
