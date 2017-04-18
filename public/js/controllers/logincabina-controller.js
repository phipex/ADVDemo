(function(app) {
	app.controller('logincabinaController', ['$scope', '$state', '$rootScope', function($scope, $state, $rootScope) {
        var loginCabina = this;

        loginCabina.seleccionActual = $rootScope.seleccionActual;
        loginCabina.onTouch = onTouch;
        loginCabina.onIngresar = onIngresar;
        loginCabina.cedula = null;

        console.log('loginCabina.seleccionActual',loginCabina.seleccionActual);
        if(loginCabina.seleccionActual == null){
            $state.go('seleccion');
        }

        function onIngresar() {
            
        }
        
        function onTouch() {
            console.log(loginCabina.cedula);
            loginCabina.cedula = '123456789';
        }
	}]);
})(ADVDemo);
