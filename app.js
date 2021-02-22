(function () {
    'use strict';
    
    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);
    
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
      $scope.message = "";
      $scope.dishes = "";
      
      $scope.check = function (){
        var list = $scope.dishes.split(", "); //divides the string by ", " and adds it to the variabel list
        
        if (list.length > 3) { //checks if the length of said list is greter than 3
            $scope.message = "Too much!";
        } else if($scope.dishes == ""){ //checks if string is empty
            $scope.message = "Please enter data first";
            
        } else {
            $scope.message = "Enjoy!"; //changes messa to Enjoy! is string is not empty and length of list is less than 3
        }
      };
    }
    
    })();
    