angular.module('app.controllers', [])
  
.controller('profileCtrl', function($scope, $ionicSideMenuDelegate) {
      
      $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
      };
})
   
.controller('loginCtrl', function($scope) {

    ionic.Platform.ready(function() {
      
    });

})
   
.controller('registerCtrl', function($scope) {

})

.controller('settingsCtrl', function($scope) {

})

.controller('splashCtrl', function($scope, $state) {
  setTimeout(function(argument) {
    $state.go('login');
  }, 2000);
}) 