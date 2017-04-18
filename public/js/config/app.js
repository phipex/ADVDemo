var ADVDemo = angular.module('ADVDemo', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router']);

(function(app) {
    app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider

            .state('seleccion', {
		url: '/seleccion',
		templateUrl: 'partials/seleccion-partial.html',
		controller: 'seleccionController'
	})

	.state('home', {
            url: '/',
            templateUrl: 'partials/home-partial.html',
            controller: 'HomeController'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'partials/about-partial.html',
            controller: 'AboutController'
        })

        .state('main', {
            url: '/main',
            abstract: true,
            templateUrl: 'partials/main-partial.html',
            controller: 'mainController'
        });
    }]);
})(ADVDemo);
