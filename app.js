var app = angular.module('app',[]);

app.controller('LoginController', ['$scope', '$http', '$templateCache', function($scope, $http, $templateCache) {
  
  $scope.method = 'post';
  $scope.url = 'http://localhost:8081/Spotify/login';

  $scope.username ="";
  $scope.password ="";

  $scope.data = $.param({
                username: $scope.username,
                password: $scope.password
            });

  $scope.config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }

  $scope.login = function(){
  	/*
  	$http({method: $scope.method, url: $scope.url, config:$scope.config, cache: $templateCache}).
        then(function(response) {
          $scope.status = response.status;
          $scope.data = response.data;
        }, function(response) {
          $scope.data = response.data || 'Request failed';
          $scope.status = response.status;
      });*/
		$http.post($scope.url, $scope.data, $scope.config)
            .success(function (data, status, headers, config) {
            })
            .error(function (data, status, header, config) {
            });
  }
}]);