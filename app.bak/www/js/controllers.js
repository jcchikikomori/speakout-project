angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, ionicMaterialInk, ionicMaterialMotion) {})

.controller('ChatsCtrl', function($scope, Chats, ionicMaterialInk, ionicMaterialMotion) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats, ionicMaterialInk, ionicMaterialMotion) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope, ionicMaterialInk, ionicMaterialMotion) {
  $scope.settings = {
    enableFriends: true
  };
});
