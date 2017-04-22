(function(app) {
	app.controller('seleccionController', ['$scope', '$state','$timeout', function($scope,$state, $timeout) {
        var vm = this,
            seleccion = vm;
        vm.ctrlName = 'SeleccionCtrl';

        $scope.showme = true;

        seleccion.listaProvedores = [
            'Wplay',
            'Ies',
            'Cabitech',
            'Oceano',
            'Bet365'
        ];

        seleccion.listaProvedores2 = {
            'Apuestas America': {nombre:'Apuestas America', color:'#C8E6C9'},
            'Apuestas ASD': {nombre:'Apuestas ASD', color: '#B2DFDB'},
            'Apuestas Europe': {nombre:'Apuestas Europe', color: '#8C9EFF'},
            'Apuestas George': {nombre:'Apuestas George', color: '#D1C4E9'},
            'Apuestas Guasner': {nombre:'Apuestas Guasner', color: '#BBDEFB'},
            'Apuestas lock': {nombre:'Apuestas lock', color: '#B2DFDB'}
        };

        seleccion.onSelect = onSelect;

        function onSelect(nameItem) {
            $scope.showme = false;

                var item = seleccion.listaProvedores2[nameItem];
                console.log(item);

                $scope.$emit('to_parent', item);
                $state.go('logincabina');



        }
	}]);
})(ADVDemo);
