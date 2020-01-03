angular.module('learndigest', []);

angular.module('learndigest').controller('PlaygroundCtrl', function($scope) {
  $scope.force = 30;
  $scope.resetforce = function(){
    $scope.force = 0;
  }

});
