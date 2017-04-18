(function(app) {
	app.controller('mainController', ['$scope','$rootScope', function($scope, $rootScope) {
        var main = this;
        main.seleccionActual = null;
        $rootScope.seleccionActual = main.seleccionActual;
        $scope.$on('to_parent', function (event, data) {
            main.seleccionActual = data;
        });
	}]);
})(ADVDemo);
