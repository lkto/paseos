angular.module('starter.controllers', [])

.controller('ListaCtrl', function($scope,$http,$rootScope,$location) {
  
   $http.get('http://holamascota.com:3000/paseos/lista ').
      then(function(response) {
            $scope.lista = response.data;
            console.log(response.data);          
     })


    $scope.detalles = function (id){
      
      $rootScope.id = id;
      $location.path( "tab/ver_detalle" );
    }

})

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
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

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
