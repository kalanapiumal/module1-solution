(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchController', LunchController);

  LunchController.$inject = ['$scope'];

  function LunchController($scope){

    $scope.countLunch = function(){
      var count = 0;
      var lunches = $scope.lunchInput;

      if(!lunches){
        $scope.message = "Please enter data first";
        $scope.messageStyle = {'color': 'red'};
        $scope.inputStyle = {'border-color': 'red'};
      } else {
        for(let lunch of lunches.split(',')){
          if(lunch === '' || lunch === ' '){
            count += 0;
          } else {
            count++;
          }
        }
        if(count === 0){
          $scope.message = "Please enter data first";
          $scope.messageStyle = {'color': 'red'};
          $scope.inputStyle = {'border-color': 'red'};
        } else if (count <= 3){
          $scope.message = "Enjoy!";
          $scope.messageStyle = {'color': 'green'};
          $scope.inputStyle = {'border-color': 'green'};
        } else {
          $scope.message = "Too Much!";
          $scope.messageStyle = {'color': 'green'};
          $scope.inputStyle = {'border-color': 'green'};
        }
      }
    }
  }
})()
