(function(app) {
	app.controller('seleccionController', ['$scope', '$state', function($scope,$state) {
        var vm = this,
            seleccion = vm;
        vm.ctrlName = 'SeleccionCtrl';

        seleccion.listaProvedores = [
            'Wplay',
            'Ies',
            'Cabitech',
            'Oceano',
            'Bet365'
        ];

        seleccion.onSelect = onSelect;

        function onSelect(item) {
            console.log(item);
            $scope.$emit('to_parent', item);
            $state.go('logincabina');
        }
	}]);
})(ADVDemo);
