var loginCtrl = angular.module('myApp.loginCtrl', []);
loginCtrl.controller('LoginCtrl', ['$scope', '$rootScope', '$location', 'AuthenticationService', 'GoogleMapService',
    function($scope, $rootScope, $location, AuthenticationService, GoogleMapService) {

        // reset login status
        AuthenticationService.ClearCredentials();

		
	
	$scope.testing = function() {
        GoogleMapService.addMarker();
    };


		
        //the scope login function
        $scope.login = function() {

            //Show the spinner
            $scope.dataLoading = true;

            //Log the user with the service
            AuthenticationService.Login($scope.username, $scope.password,
                function(response) {
                    
                    if (response.success) {

                        //we set the credentials
                        AuthenticationService.SetCredentials($scope.username, $scope.password);

                        //we relocate to /panel
                        $location.path('panel');

                    } else {
                        
                        //we show an error
                        $scope.error = response.message;

                        $scope.dataLoading = false;
                    }
                });
        };
		$scope.login2 = function() {

            //Show the spinner
            $scope.dataLoading = true;

            //Log the user with the service
            AuthenticationService.Login($scope.username, $scope.password,
                function(response) {
                    
                    if (response.success) {

                        //we set the credentials
                        AuthenticationService.SetCredentials($scope.username, $scope.password);

                        //we relocate to /panel2
                        $location.path('panel2');

                    } else {
                        
                        //we show an error
                        $scope.error = response.message;

                        $scope.dataLoading = false;
                    }
                });
        };
    }
]);
