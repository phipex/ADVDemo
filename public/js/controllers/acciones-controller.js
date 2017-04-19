(function(app) {
	app.controller('accionesController', ['$scope', '$rootScope', '$state', function($scope,$rootScope, $state) {
		var acciones = this;


        acciones.seleccionActual = $rootScope.seleccionActual;
        acciones.onTouch = onTouch;
        acciones.onIngresar = onIngresar;
        acciones.cedula = null;

        console.log('loginCabina.seleccionActual',acciones.seleccionActual);
        if(acciones.seleccionActual == null){
            $state.go('seleccion');
        }

        function onIngresar() {
            //$state.go('acciones');
        }

        function onTouch() {
            console.log(acciones.recarga);
            acciones.recarga = '123456789';
        }
	}]);
})(ADVDemo);
