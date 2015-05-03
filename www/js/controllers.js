angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $cordovaProgress, $cordovaNetwork) {
  /*$cordovaProgress.showSimple(true);

  setTimeout(function(){
    $cordovaProgress.hide();
  }, 3000);

  if ($cordovaNetwork.isOffline()) {
    alert('OFFLINE');
  }*/
})

.controller('SearchCtrl', function($scope, $http, $cordovaProgress, $cordovaNetwork) {
  $scope.events = [];

  for (var i = 0; i <= 400; i++) {
    $scope.events.push({id: '1', title: 'CIRCUITO POPULAR DE CORRIDAS - PENHA', date: '01/05/2015', local: 'SÃO PAULO - SP / SP'});
  }
})

.controller('HomeCtrl', function($scope, $http, $cordovaProgress, $cordovaNetwork) {
  $scope.nextEvents = [];
  // $cordovaProgress.showSimple(true);

  $http.get('https://ssl1.raweonline.com/cronoserv/app/eventos.asp?key=QVBQMjAxNUNST05PU0VSVg')
    .success(function(data, status, headers, config) {
      console.log(data, status, headers, config);
      // $cordovaProgress.hide();
      $scope.nextEvents = data;
    })
    .error(function(data, status, headers, config) {
      // $cordovaProgress.hide();
      // alert('Ocorreu um erro ao carregar os próximos eventos.');
      $scope.nextEvents = [ { "id": "155020", "title": "CORRIDA DO TRABALHADOR 7K ITAPEVA - SP", "date": "3/5/2015", "local": "ITAPEVA / SP" }, { "id": "155014", "title": "8Âª CORRIDA POLÃCIA MILITAR DE FOZ DO IGUAÃ‡U-14K", "date": "3/5/2015", "local": "FOZ DO IGUAÃ‡U / PR" }, { "id": "155005", "title": "8Âª CORRIDA POLÃCIA MILITAR DE FOZ DO IGUAÃ‡U-5K", "date": "3/5/2015", "local": "FOZ DO IGUAÃ‡U / PR" }, { "id": "0", "title": "CORRIDA DO TRABALHADOR - ITAPEVA", "date": "3/5/2015", "local": "/ SP" }, { "id": "155035", "title": "3Âª MEIA MARATONA ECOLÃ“GICA DE REVEZAMENTO - QUARTETO", "date": "9/5/2015", "local": "SÃƒO PAULO / SP" }, { "id": "155034", "title": "3Âª MEIA MARATONA ECOLÃ“GICA DE REVEZAMENTO - DUPLA", "date": "9/5/2015", "local": "SÃƒO PAULO / SP" }, { "id": "155033", "title": "3ÂªMEIA MARATONA ECOLÃ“GICA - SOLO", "date": "9/5/2015", "local": "SÃƒO PAULO / SP" }, { "id": "155032", "title": "3Âª MEIA MARATONA ECOLÃ“GICA - 5Km", "date": "9/5/2015", "local": "SÃƒO PAULO / SP" }, { "id": "155031", "title": "3Âª MEIA MARATONA ECOLÃ“GICA - 10Km", "date": "9/5/2015", "local": "SÃƒO PAULO / SP" } ];
    });
})

.controller('DatesCtrl', function($scope, $http, $cordovaProgress, $cordovaNetwork) {
  $scope.dates = [];
  // $cordovaProgress.showSimple(true);

  $http.get('https://ssl1.raweonline.com/cronoserv/app/mothyear.asp?key=QVBQMjAxNUNST05PU0VSVg')
    .success(function(data, status, headers, config) {
      console.log(data, status, headers, config);
      // $cordovaProgress.hide();
      $scope.dates = data;
    })
    .error(function(data, status, headers, config) {
      // $cordovaProgress.hide();
      //alert('Ocorreu um erro ao carregar os próximos eventos.');
      $scope.dates = [ { "year": "15", "month": "05" }, { "year": "15", "month": "04" }, { "year": "15", "month": "03" }, { "year": "15", "month": "02" }, { "year": "15", "month": "01" }, { "year": "14", "month": "12" }, { "year": "14", "month": "11" }, { "year": "14", "month": "10" }, { "year": "14", "month": "09" }, { "year": "14", "month": "08" }, { "year": "14", "month": "07" }, { "year": "14", "month": "06" }, { "year": "14", "month": "05" }, { "year": "14", "month": "04" }, { "year": "14", "month": "02" } ];
    });
})

.controller('EventsCtrl', function($scope, $stateParams, $http, $cordovaProgress, $cordovaNetwork) {
  $scope.events = [];

  $http.get('https://ssl1.raweonline.com/cronoserv/app/eventos.asp?key=QVBQMjAxNUNST05PU0VSVg&year='+$stateParams.year+'&month='+$stateParams.month)
    .success(function(data, status, headers, config) {
      console.log(data, status, headers, config);
      // $cordovaProgress.hide();
      $scope.events = data;
    })
    .error(function(data, status, headers, config) {
      // $cordovaProgress.hide();
      //alert('Ocorreu um erro ao carregar os próximos eventos.');
      $scope.events = [ { "id": "155009", "title": "6Âª CORRIDA DO TRABALHADOR GUARAREMA", "date": "1/5/2015", "local": "GUARAREMA / SP" }, { "id": "155008", "title": "7Âº DESAFIO DOS TRABALHADORES DE CORRIDA E CAMINHADA - 8Km", "date": "1/5/2015", "local": "OSASCO / SP" }, { "id": "155004", "title": "7Âº DESAFIO DOS TRABALHADORES DE CORRIDA E CAMINHADA - 4Km", "date": "1/5/2015", "local": "OSASCO / SP" }, { "id": "155001", "title": "3Âª PROVA PEDESTRE DO TRABALHADOR - SALTO PIRAPORA", "date": "1/5/2015", "local": "/ SP" }, { "id": "155001", "title": "3Âª PROVA PEDESTRE DO TRABALHADOR - SALTO PIRAPORA", "date": "1/5/2015", "local": "/ SP" } ];
    });
});
