angular.module('app.controllers', [])
  
.controller('profileCtrl', function($scope) {

})
   
.controller('loginCtrl', function($scope, $cordovaDialogs, $cordovaPreferences) {

    $cordovaDialogs.alert('assalamualaikum');

      $scope.store = function() {
        $cordovaPreferences.store('key', 'myMagicValue')
          .success(function(value) {
            alert("Success: " + value);
          })
          .error(function(error) {
            alert("Error: " + error);
          })
      };
  
  

})
   
.controller('registerCtrl', function($scope, $ionicLoading) {
  $ionicLoading.show({
    template: 'sedang..',
    duration: 2000
  });
})
 