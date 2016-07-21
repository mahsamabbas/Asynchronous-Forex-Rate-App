

/* AngularJS App initialized*/ 
var app = angular.module('myApp', [])


//Configurations
app.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
        $httpProvider.defaults.headers.common["Accept"] = "application/json";
        $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
    }
]);


//Controller
app.controller('rateappCtrl', function($scope, $http) {


    // Function to get the data
    $scope.getData = function(){
      $http.get('data/rates.json')
        .success(function(data, status, headers, config) {


        var date = new Date();
        $scope.n = date.toDateString();
         $scope.time = date.toLocaleTimeString();

      
        
        $scope.usd_buying = data.usd_buying;
        $scope.usd_selling = data.usd_selling;
        $scope.eur_buying = data.eur_buying;
        $scope.eur_selling = data.eur_selling;
        $scope.gbp_buying = data.gbp_buying;
        $scope.gbp_selling = data.gbp_selling;
        $scope.yen_buying = data.yen_buying;
        $scope.yen_selling = data.yen_selling;
        $scope.cad_buying = data.cad_buying;
        $scope.cad_selling = data.cad_selling;
        $scope.hkd_buying = data.hkd_buying;
        $scope.hkd_selling = data.hkd_selling;
        $scope.uae_buying = data.uae_buying;
        $scope.uae_selling = data.uae_selling;
        $scope.sr_buying = data.sr_buying;
        $scope.sr_selling = data.sr_selling;
        $scope.kd_buying = data.kd_buying;
        $scope.kd_selling = data.kd_selling;
        $scope.qr_buying = data.qr_buying;
        $scope.qr_selling = data.qr_selling;
        $scope.or_buying = data.or_buying;
        $scope.or_selling = data.or_selling;
        $scope.bhr_buying = data.bhr_buying;
        $scope.bhr_selling = data.bhr_selling;
        $scope.aud_buying = data.aud_buying;
        $scope.aud_selling = data.aud_selling;
        $scope.ind_buying = data.ind_buying;
        $scope.ind_selling = data.ind_selling;
        $scope.sf_buying = data.sf_buying;
        $scope.sf_selling = data.sf_selling;
        $scope.dk_buying = data.dk_buying;
        $scope.dk_selling = data.dk_selling;
        $scope.sk_buying = data.sk_buying;
        $scope.sk_selling = data.sk_selling;
        $scope.nk_buying = data.nk_buying;
        $scope.nk_selling = data.nk_selling;
      });
    };


    //Call First time
    $scope.getData();
    // Function to replicate setInterval using $timeout service.
   setInterval($scope.getData, 30000);
  
     
});

