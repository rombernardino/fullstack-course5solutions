(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerCtrl', LunchCheckerCtrl);

LunchCheckerCtrl.$inject = ['$scope'];
function LunchCheckerCtrl ($scope) {

    $scope.lunchString = "";

    $scope.checkIfTooMuch = function (lunchString) {
      const separator = ',';
      var arrayOfStrings = lunchString.split(separator);
      $scope.message = "";
      $scope.count = 0;

      console.log(arrayOfStrings);

      if (arrayOfStrings != "") {
        for (var i = 0; i < arrayOfStrings.length; i++) {
          console.log(arrayOfStrings[i]);
          if (arrayOfStrings[i] === ' ' || arrayOfStrings[i] === ''){
            console.log(arrayOfStrings[i]);
            continue;
          }
          $scope.count++;
        }

        console.log($scope.count);
        if ($scope.count <= 3)
          $scope.message = "Enjoy!";
        else
          $scope.message = "Too much!";
      }
      else
        $scope.message = "It's empty! You're still hungry. Give some food! :D";

    }

}


})();
