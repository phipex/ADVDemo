(function(app) {
	app.controller('mainController', ['$scope','$rootScope','$state', function($scope, $rootScope, $state) {
        var main = this;
        main.seleccionActual = null;



        main.close=function () {
            console.log("close");
            reiniciaSeleccion();
            $state.go('seleccion');
        };

        reiniciaSeleccion();

        $rootScope.seleccionActual = main.seleccionActual;
        $scope.$on('to_parent', function (event, data) {
            main.seleccionActual = data;
            $rootScope.seleccionActual = main.seleccionActual;
        });
        function reiniciaSeleccion() {
            main.seleccionActual = {
                color: null,
                nombre: null
            };
            $rootScope.seleccionActual = main.seleccionActual;
        }

	}]);
})(ADVDemo);
