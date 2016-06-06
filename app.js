
var result = "";
var values = "";
var tempData = [];
var tags = [];
var tagNames = [];
var series = [];
var app = angular.module('myapp', ['chart.js']);

app.config(function (ChartJsProvider) {
  ChartJsProvider.setOptions({
      colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      responsive: true
    });
  });
  app.controller('LineCtrl', ['$scope', '$http', 'webServiceCall', '$interval', function ($scope, $http, webServiceCall, $interval) {

    $scope.data = [];
    $scope.labels = [];
    $scope.series = [];
    $scope.values = [];
    $scope.sortType     = ''; // set the default sort type
    $scope.sortReverse  = false;

    $scope.getData= function(){

		 webServiceCall.getDataFromService().then(function (data) {
        tags = data.tags;

          for (var j = 0; j < tags.length; j++){
            tagNames.push(tags[j].name);
            values = data.tags[j].results[j].values;

            for (var i = values.length-25; i < values.length; i++){
              tempData.push(values[i][1]);
              $scope.labels.push(values[i][0]);
            }
          }

          $scope.values = values;
          console.log(tagNames);
          console.log($scope.labels);
          console.log(tempData);
          console.log($scope.data);
          console.log($scope.series);
		 });

	};
	$scope.getData();
	// $interval(function() {
  //     tempData = [];
  //     $scope.labels = [];
  //     tagNames = [];
  //     $scope.getData();
  //   }, 3500);

  $scope.data.push(tempData);
  $scope.series.push(tagNames);
  //$scope.apply();
  }]);
