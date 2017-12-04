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

.controller('ver_detalleCtrl', function($scope,$http,$rootScope,$location) {
  
  $http.get('http://holamascota.com:3000/paseos/lista ').
      then(function(response) {
            $scope.lista = response.data;
            var id = $rootScope.id
            var length =  $scope.lista.length;
             for ( i=0; i < length; i++) {  
                    
                    if ($scope.lista[i]._id == id ) {
                        
                      
                       $scope.datos = 
                        [
                          {estado:$scope.lista[i].estado, fecha_creacion:$scope.lista[i].fecha_creacion ,fecha_creacion:$scope.lista[i].fecha_creacion, nombre_paseador:$scope.lista[i].nombre_paseador, descripcion_salida:$scope.lista[i].descripcion_salida, descripcion_llegada:$scope.lista[i].descripcion_llegada, tipo_paseo:$scope.lista[i].tipo_paseo, coordenadas_salida: $scope.lista[i].coordenadas_salida },
                          
                        ];

                         console.log($scope.datos);
                    }
                 };          
     })

      $scope.ver_mapa = function (coor){
      $rootScope.coor = coor;
      $location.path( "tab/ver_mapa" );
     
    }

})
.controller('ver_mapaCtrl', function($scope,$http,$rootScope,$location) {
  
 console.log($rootScope.coor);

  var cordenadas = $rootScope.coor;
  var respuesta = cordenadas.split(",");
  latitud = respuesta[0];
  longitud = respuesta[1];

  console.log(latitud);
  console.log(longitud);

 $scope.map = {
    center: {
      latitude: latitud, 
      longitude: longitud
    }, 
    zoom: 12,
    options : {
      scrollwheel: false,

    },
    control: {}
  };
  $scope.marker = {
    id: 0,
    coords: {
      latitude: latitud,
      longitude: longitud
    },
    options: {
      draggable: true
    }
  };


})

.controller('loginCtrl', function($scope,$http,$rootScope,$location) {

  $scope.login = function (){

    var correo = document.getElementById("user").value;
    var clave = document.getElementById("clave").value;
    console.log(clave);

 


var req = {
 method: 'POST',
 url: 'http://holamascota.com:3000/usuarios/login',
 headers: {
  // 'Content-Type': 'application/x-www-form-urlencoded'
   'Content-Type': 'application/x-www-form-urlencoded;'
 },
 data: { correo: 'prueba@gmail.com',
         clave: '12345' }
}
$http(req).then(function(data){
     console.log(data);
     $location.path( "tab/lista" );
});}
  
  

});
