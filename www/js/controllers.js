angular.module('starter.controllers', ['starter.services'])

.controller('RandomizerCtrl', function($scope, Randomizer, $ionicLoading) {

  $scope.doRefresh = function() { 
    $scope.watch = Randomizer.refresh(); 
    console.log("Help");
    $scope.$broadcast('scroll.refreshComplete');
  }


  $scope.watch = Randomizer.refresh();

});
