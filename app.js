(function () {
'use strict';
angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope, $filter){
$scope.text = "";
$scope.message = "Please Enter Data First";

$scope.CheckIt = function (){
  if($scope.text.length > 0){
      $scope.message = CheckIfTooMuch($scope.text);
  }else{
      $scope.message= "Please Enter Data First";
  }
};

function CheckIfTooMuch(string){
var words = string.split(',');
if(words.length <= 3){
    return "Enjoy!";
}else{
    return "Too Much!";
}
}
}

})();