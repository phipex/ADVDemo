    var ADVDemo = angular.module('ADVDemo', ['ngMaterial', 'ngAnimate', 'ngMessages', 'ngAria', 'ui.router', 'ngWebSocket']);
    var dataStream = null;
    (function(app) {
        app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

            $urlRouterProvider.otherwise('/seleccion');

            $stateProvider

                .state('seleccion', {
            url: '/seleccion',
            templateUrl: 'partials/seleccion-partial.html',
            controller: 'seleccionController'
        })

                .state('acciones', {
                url: '/acciones',
                templateUrl: 'partials/acciones-partial.html',
                controller: 'accionesController'
            })

        .state('logincabina', {
            url: '/logincabina',
            templateUrl: 'partials/logincabina-partial.html',
            controller: 'logincabinaController'
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
        }]).factory('Billetero', ['$websocket', function($websocket) {
            var //dataStream = null,//$websocket('ws://localhost:8282/BackendBingo-web/websocket/tableros'), // Open a WebSocket connection
                collection = [],
                stateDic=[
                    "CONNECTING",
                    "OPEN",
                    "CLOSING",
                    "CLOSED"
                ],
                state = {
                    codigo: stateDic.OPEN,
                    nombre: "OPEN"

                },
                callbackOnly = null;



            function openConection(){
                console.log("WebSocket::openConection",dataStream);
                console.log((dataStream == null || dataStream && dataStream.readyState == 3 ),(dataStream && dataStream.readyState == 3))
                if (dataStream == null || dataStream && dataStream.readyState == 3 ) {
                    console.log("WebSocket:: inicial");
                    dataStream = $websocket('ws://localhost:1234');
                    dataStream.onMessage(function (message) {
                        collection.push(JSON.parse(message.data));
                        //console.log("onMessage",message);
                        if (callbackOnly) {
                            //console.log("callbackOnly");
                            callbackOnly(message);
                        }


                    });
                }
                /*dataStream.onOpen(function (message) {

                 //console.log(message);
                 });
                 dataStream.onClose(function (message) {

                 //console.log(message);
                 });*/
            }

            openConection();


            var methods = {
                dataStream: dataStream,
                open: openConection,
                stateDic: stateDic,
                collection: collection,
                state: function () {
                    var state = (dataStream != null)?dataStream.readyState:3;
                    return state || 3;
                },
                addListener: function (callback) {
                    console.log("addListener---------------");
                    if (angular.isFunction(callback) && !callbackOnly) {
                        console.log("        addListener---------------");
                        callbackOnly = callback;
                    }
                },
                get: function () {//TODO no se para que sirve
                    dataStream.send(JSON.stringify({ action: 'get' }));
                }
            };

            return methods;
        }]);


    })(ADVDemo);
