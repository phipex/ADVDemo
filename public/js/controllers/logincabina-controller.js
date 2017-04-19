(function(app) {
	app.controller('logincabinaController', ['$scope', '$state', '$rootScope', '$mdDialog', function($scope, $state, $rootScope, $mdDialog) {
        var loginCabina = this;

        loginCabina.seleccionActual = $rootScope.seleccionActual;
        loginCabina.onTouch = onTouch;
        loginCabina.onIngresar = onIngresar;
        loginCabina.cedula = null;
        loginCabina.mensajeError = {
          msg: null,
          show: false
        };

        console.log('loginCabina.seleccionActual',loginCabina.seleccionActual);
        if(loginCabina.seleccionActual == null){
            $state.go('seleccion');
        }

        function onIngresar($event) {
            if (loginCabina.cedula) {
                $state.go('acciones');
            }else{
                $mdDialog.show({
                    contentElement: '#myDialog',
                    //parent: angular.element(document.body),
                    targetEvent: $event,
                    clickOutsideToClose: true
                });
            }

        }
        
        function onTouch() {
            console.log(loginCabina.cedula);
            loginCabina.cedula = '123456789';
        }
	}]);
})(ADVDemo);
