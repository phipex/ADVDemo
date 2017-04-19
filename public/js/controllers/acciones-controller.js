(function(app) {
	app.controller('accionesController', ['$scope', '$rootScope', '$state', '$mdDialog', function($scope,$rootScope, $state, $mdDialog) {
		var acciones = this;


        acciones.seleccionActual = $rootScope.seleccionActual;
        acciones.onTouch = onTouch;
        acciones.onIngresar = onIngresar;
        acciones.recarga = 0;

        console.log('loginCabina.seleccionActual',acciones.seleccionActual);
        if(acciones.seleccionActual == null){
            $state.go('seleccion');
        }

        function onIngresar($event) {

            if (acciones.recarga) {
                var promesa = $mdDialog.show({
                    contentElement: '#dialogRecargaSuccess',
                    //parent: angular.element(document.body),
                    targetEvent: $event,
                    clickOutsideToClose: true
                }).finally(function (event) {
                    console.log(event);
                    acciones.recarga = 0;
                });
            }else{

            }
        }

        function onTouch() {
            console.log(acciones.recarga);
            acciones.recarga += 10000;
        }
	}]);
})(ADVDemo);
