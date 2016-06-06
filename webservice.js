app.factory('webServiceCall', ['$q','$http', function($q,$http) {
  return{

    getDataFromService : function(){
        var deferred = $q.defer();

        var baseUrl = "https://makerspace-timeseries.run.aws-usw02-pr.ice.predix.io/api/getTimeSeriesData?start=1451635200000&tagName=Sensor1Temp";
        $http({
            method: 'GET',
            url: baseUrl,

            })
        .success(function(data, status, headers) {
            //hideLoader();
          deferred.resolve(data);
        })
        .error(function(data) {
            //hideLoader();
          deferred.resolve(data);
        });
        return deferred.promise;
    },
  };
}]);
