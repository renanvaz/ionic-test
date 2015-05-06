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

.controller('SearchCtrl', function($rootScope, $scope, $stateParams, $http, $cordovaProgress, $cordovaNetwork) {
  $scope.title = $rootScope.eventTitle;
  $scope.result = [];
  $scope.searchNumber = '';
  $scope.searchName = '';

  $scope.onSubmit = function(number, name){
    // $cordovaProgress.showSimple(true);

    $http.get('https://ssl1.raweonline.com/cronoserv/app/result.asp?key=QVBQMjAxNUNST05PU0VSVg&id='+$stateParams.id+'&number='+encodeURIComponent(number)+'&name='+encodeURIComponent(name))
      .success(function(data, status, headers, config) {
        // $cordovaProgress.hide();
        if (data.length) {
          $scope.result = data;
        } else {
          alert('Nenhum resultado encontrado.');
        }
      })
      .error(function(data, status, headers, config) {
        // $cordovaProgress.hide();
        alert('Ocorreu um erro ao carregar os próximos eventos.');
      });
  };
})

.controller('HomeCtrl', function($scope, $http, $cordovaProgress, $cordovaNetwork) {
  $scope.nextEvents = [];
  // $cordovaProgress.showSimple(true);

  $http.get('https://ssl1.raweonline.com/cronoserv/app/eventos.asp?key=QVBQMjAxNUNST05PU0VSVg')
    .success(function(data, status, headers, config) {
      // $cordovaProgress.hide();
      $scope.nextEvents = data;
    })
    .error(function(data, status, headers, config) {
      // $cordovaProgress.hide();
      alert('Ocorreu um erro ao carregar os próximos eventos.');
    });
})

.controller('DatesCtrl', function($scope, $http, $cordovaProgress, $cordovaNetwork) {
  $scope.dates = [];
  // $cordovaProgress.showSimple(true);

  $http.get('https://ssl1.raweonline.com/cronoserv/app/mothyear.asp?key=QVBQMjAxNUNST05PU0VSVg')
    .success(function(data, status, headers, config) {
      // $cordovaProgress.hide();
      $scope.dates = data;
    })
    .error(function(data, status, headers, config) {
      // $cordovaProgress.hide();
      alert('Ocorreu um erro ao carregar os próximos eventos.');
    });
})

.controller('EventsCtrl', function($rootScope, $scope, $stateParams, $http, $cordovaProgress, $cordovaNetwork) {
  $scope.year = $stateParams.year;
  $scope.month = $stateParams.month;
  $scope.events = [];

  $http.get('https://ssl1.raweonline.com/cronoserv/app/eventos.asp?key=QVBQMjAxNUNST05PU0VSVg&year='+$stateParams.year+'&month='+$stateParams.month)
    .success(function(data, status, headers, config) {
      // $cordovaProgress.hide();
      $scope.events = data;
    })
    .error(function(data, status, headers, config) {
      // $cordovaProgress.hide();
      alert('Ocorreu um erro ao carregar os próximos eventos.');
    });

  $scope.setEventTitle = function(item){
    $rootScope.eventTitle = item.title;
  };
});
