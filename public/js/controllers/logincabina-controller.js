(function(app) {
	app.controller('logincabinaController', ['$scope', '$state', '$rootScope', function($scope, $state, $rootScope) {
        var loginCabina = this;

        loginCabina.seleccionActual = $rootScope.seleccionActual;
        loginCabina.onTouch = onTouch;
        loginCabina.cedula = null;

        console.log(loginCabina.seleccionActual);
        if(loginCabina.seleccionActual){
            $state.go('seleccion');
        }

        function onTouch() {
            console.log(loginCabina.cedula);
            loginCabina.cedula = '123456789';
        }
	}]);
})(ADVDemo);
