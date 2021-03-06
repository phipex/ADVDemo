var valor = {valor:0};
(function(app) {
	app.controller('accionesController', ['$scope', '$rootScope', '$state', '$mdDialog','$mdToast','Billetero','$timeout', function($scope,$rootScope, $state, $mdDialog, $mdToast, Billetero, $timeout) {
		var acciones = this;


        acciones.seleccionActual = $rootScope.seleccionActual;
        acciones.onTouch = onTouch;
        acciones.onIngresar = onIngresar;
        acciones.recarga = valor;
        $scope.recarga = acciones.recarga;

        acciones.ligas = ligas;

        console.log('loginCabina.seleccionActual',acciones.seleccionActual);
        if(acciones.seleccionActual == null){
            $state.go('seleccion');
        }

        function onIngresar($event) {

            if (acciones.recarga.valor) {
                $mdDialog.show({
                    contentElement: '#dialogRecargaSuccess',
                    //parent: angular.element(document.body),
                    targetEvent: $event,
                    clickOutsideToClose: true
                }).finally(function (event) {
                    console.log(event);
                    acciones.recarga.valor = 0;
                    //$scope.recarga = 0;
                });
            }else{

            }
        }

        function mostrarRecarga(valor) {
            var alert = $mdDialog.alert({
                title: 'Nuevo Billete',
                textContent: 'Un nuev billete de $'+valor+' pesos a sido ingresado',
                ok: 'Close'
            });

            $mdDialog
                .show(alert)
                .finally(function () {
                    //alert = undefined;
                });
        }

        function addRecarga(valor) {
            //acciones.recarga.valor += valor;
            //console.log($scope.recarga.valor+'');
            $scope.recarga.valor  += valor;
            mostrarRecarga($scope.recarga.valor);
            //console.log($scope.recarga.valor+'');
        }

        function onTouch(ev) {
            //console.log(acciones.recarga);
            addRecarga(10000);


        }

        function getAllLigas() {
            acciones.ligas = ligasServiceService.getAllLigas();
        }

        

        //ligas

    var keysLigas = Object.keys(ligas);
    //console.log(keysLigas);
    var nameLigas = []; 
    for (var i = keysLigas.length - 1; i >= 0; i--) {
        var key = keysLigas[i];
        var liga = ligas[key];
        nameLigas.push(liga.name);
    }
    //console.log(nameLigas);

    function getRamdonLiga() {
       var indice =  Math.floor((Math.random()*(nameLigas.length))+1);
       //console.log(nameLigas[indice]);
       return nameLigas[indice];
    }

    this.tiles = buildGridModel({
            icon : "avatar:svg-",
            title: "Svg-",
            background: ""
          });

    function buildGridModel(tileTmpl){
      var it, results = [ ];

      for (var j=0; j<11; j++) {

        it = angular.extend({},tileTmpl);
        it.icon  = it.icon + (j+1);
        it.title = getRamdonLiga();
        it.span  = { row : 1, col : 1 };

        switch(j+1) {
          case 1:
            it.background = "red";
            it.span.row = it.span.col = 2;
            break;

          case 2: it.background = "green";         break;
          case 3: it.background = "darkBlue";      break;
          case 4:
            it.background = "blue";
            it.span.col = 2;
            break;

          case 5:
            it.background = "yellow";
            it.span.row = it.span.col = 2;
            break;

          case 6: it.background = "pink";          break;
          case 7: it.background = "darkBlue";      break;
          case 8: it.background = "purple";        break;
          case 9: it.background = "deepBlue";      break;
          case 10: it.background = "lightPurple";  break;
          case 11: it.background = "yellow";       break;
        }

        results.push(it);
      }
      return results;
    }
        //********** websocekt

        $scope.WebSocket = Billetero;
        $scope.MyData = Billetero.collection;
        var stateDic = Billetero.stateDic,
            keyStates = Object.keys(stateDic);
        $scope.estadoActual = null;
        $scope.estado = Billetero.state;
        $scope.open=function(){
            if($scope.estado != 'OPEN'){
                Billetero.open();
            }

        };
        Billetero.open();
        var onMensaje = function(mesageEvent){
            //console.log("++++++++++");
            //var _this = this;
            //console.log("_this",_this);
            var objetoMsg = JSON.parse(mesageEvent.data);
            console.log("objetoMsg",objetoMsg);

            //console.log(mesageEvent);
            //console.log(WebSocket);

            $timeout(function () {

                console.log($scope.recarga.valor+'');
                addRecarga(objetoMsg.valor);

                //mostrarRecarga(acciones.recarga.valor);
                console.log($scope.recarga.valor+'');
            },500);
        };



        //console.log("control.addListener");
        Billetero.addListener(onMensaje);
        $scope.$watch("estado()",function(){
            var estadoActual = $scope.estado();
            $scope.estadoActual = stateDic[estadoActual];
        });
    

	}]);
})(ADVDemo);

var ligas = {
    "1377": {
        "name": "AFC Asian Cup",
        "sport": "Soccer"
    },
    "1157": {
        "name": "AFC Asian Cup Qualifiers",
        "sport": "Soccer"
    },
    "1020": {
        "name": "AFC Champions League",
        "sport": "Soccer"
    },
    "631": {
        "name": "AFC Cup",
        "sport": "Soccer"
    },
    "2227": {
        "name": "AFC Solidarity Cup",
        "sport": "Soccer"
    },
    "1504": {
        "name": "AFC U19 Championships",
        "sport": "Soccer"
    },
    "1817": {
        "name": "AFC U19 Womens Championship",
        "sport": "Soccer"
    },
    "14342": {
        "name": "AFC Women\u2019s Asian Cup",
        "sport": "Soccer"
    },
    "1590": {
        "name": "AFF Cup",
        "sport": "Soccer"
    },
    "355": {
        "name": "AFF U19 Championship",
        "sport": "Soccer"
    },
    "1139": {
        "name": "Africa - World Cup Qualifying",
        "sport": "Soccer"
    },
    "6464": {
        "name": "Africa Cup of Nations",
        "sport": "Soccer"
    },
    "4004": {
        "name": "Africa Cup of Nations Women",
        "sport": "Soccer"
    },
    "10387": {
        "name": "Algarve Cup",
        "sport": "Soccer"
    },
    "1791": {
        "name": "Algeria Cup",
        "sport": "Soccer"
    },
    "44": {
        "name": "Algeria Division 1",
        "sport": "Soccer"
    },
    "763": {
        "name": "Algeria Division 2",
        "sport": "Soccer"
    },
    "2201": {
        "name": "Algeria Super Cup",
        "sport": "Soccer"
    },
    "11467": {
        "name": "Algeria U21 Cup",
        "sport": "Soccer"
    },
    "758": {
        "name": "Algeria Youth League",
        "sport": "Soccer"
    },
    "1833": {
        "name": "Antigua & Barbuda Premier Division",
        "sport": "Soccer"
    },
    "5815": {
        "name": "Arab Club Championship",
        "sport": "Soccer"
    },
    "6279": {
        "name": "Arabian Champions League",
        "sport": "Soccer"
    },
    "2306": {
        "name": "Argentina Championship Women",
        "sport": "Soccer"
    },
    "1089": {
        "name": "Argentina Copa Santa Fe",
        "sport": "Soccer"
    },
    "679": {
        "name": "Argentina Cup",
        "sport": "Soccer"
    },
    "85": {
        "name": "Argentina Nacional B",
        "sport": "Soccer"
    },
    "1821": {
        "name": "Argentina Primera B",
        "sport": "Soccer"
    },
    "189": {
        "name": "Argentina Primera B Metropolitana",
        "sport": "Soccer"
    },
    "549": {
        "name": "Argentina Primera C Metropolitana",
        "sport": "Soccer"
    },
    "550": {
        "name": "Argentina Primera D Metropolitana",
        "sport": "Soccer"
    },
    "56": {
        "name": "Argentina Primera Division",
        "sport": "Soccer"
    },
    "700": {
        "name": "Argentina Reserve League",
        "sport": "Soccer"
    },
    "8529": {
        "name": "Argentina Super Cup",
        "sport": "Soccer"
    },
    "553": {
        "name": "Argentina Torneo A",
        "sport": "Soccer"
    },
    "140": {
        "name": "Argentina Torneo B",
        "sport": "Soccer"
    },
    "9331": {
        "name": "Argentina Torneo C",
        "sport": "Soccer"
    },
    "1556": {
        "name": "Armenia First League",
        "sport": "Soccer"
    },
    "457": {
        "name": "Armenia Premier League",
        "sport": "Soccer"
    },
    "932": {
        "name": "Armenia Super Cup",
        "sport": "Soccer"
    },
    "693": {
        "name": "Armenian Cup",
        "sport": "Soccer"
    },
    "1026": {
        "name": "Asia - World Cup Qualifying",
        "sport": "Soccer"
    },
    "14005": {
        "name": "Australia - ACT Premier Pathway League",
        "sport": "Soccer"
    },
    "14121": {
        "name": "Australia - NSW Premier League 2 U20",
        "sport": "Soccer"
    },
    "2920": {
        "name": "Australia A- League Youth",
        "sport": "Soccer"
    },
    "603": {
        "name": "Australia A-League",
        "sport": "Soccer"
    },
    "9611": {
        "name": "Australia Brisbane Capital League 1",
        "sport": "Soccer"
    },
    "9658": {
        "name": "Australia Brisbane Capital League 1 Reserves",
        "sport": "Soccer"
    },
    "9522": {
        "name": "Australia Brisbane Capital League 2",
        "sport": "Soccer"
    },
    "9577": {
        "name": "Australia Brisbane Capital League 2 Reserves",
        "sport": "Soccer"
    },
    "320": {
        "name": "Australia Brisbane Capital League 3",
        "sport": "Soccer"
    },
    "9610": {
        "name": "Australia Brisbane Premier League",
        "sport": "Soccer"
    },
    "323": {
        "name": "Australia Brisbane Premier League Women",
        "sport": "Soccer"
    },
    "9615": {
        "name": "Australia Brisbane Premier Reserve League",
        "sport": "Soccer"
    },
    "14008": {
        "name": "Australia Capital Territory U20 League",
        "sport": "Soccer"
    },
    "684": {
        "name": "Australia FFA Cup",
        "sport": "Soccer"
    },
    "316": {
        "name": "Australia Friendlies",
        "sport": "Soccer"
    },
    "11807": {
        "name": "Australia Gold Coast Premier League",
        "sport": "Soccer"
    },
    "15647": {
        "name": "Australia Gold Coast Reserve",
        "sport": "Soccer"
    },
    "10657": {
        "name": "Australia New South Wales League 2",
        "sport": "Soccer"
    },
    "15320": {
        "name": "Australia New South Wales League 3",
        "sport": "Soccer"
    },
    "14805": {
        "name": "Australia New South Wales NPL Women",
        "sport": "Soccer"
    },
    "10825": {
        "name": "Australia New South Wales Premier League",
        "sport": "Soccer"
    },
    "11074": {
        "name": "Australia New South Wales U20 League",
        "sport": "Soccer"
    },
    "11016": {
        "name": "Australia Northern NSW Premier League",
        "sport": "Soccer"
    },
    "11361": {
        "name": "Australia Northern NSW U20 League - 80 mins play",
        "sport": "Soccer"
    },
    "11085": {
        "name": "Australia Northern NSW U22 League - 80 mins play",
        "sport": "Soccer"
    },
    "301": {
        "name": "Australia NPL Finals",
        "sport": "Soccer"
    },
    "10001": {
        "name": "Australia Queensland Premier League",
        "sport": "Soccer"
    },
    "11998": {
        "name": "Australia Queensland Premier League Women",
        "sport": "Soccer"
    },
    "10064": {
        "name": "Australia Queensland U20 League",
        "sport": "Soccer"
    },
    "9609": {
        "name": "Australia SA Premier League Reserves",
        "sport": "Soccer"
    },
    "315": {
        "name": "Australia SA Premier League Women",
        "sport": "Soccer"
    },
    "9447": {
        "name": "Australia South Australia Premier League",
        "sport": "Soccer"
    },
    "9616": {
        "name": "Australia South Australia State League 1",
        "sport": "Soccer"
    },
    "10630": {
        "name": "Australia South Australia State League Reserves",
        "sport": "Soccer"
    },
    "12033": {
        "name": "Australia Tasmania Championship",
        "sport": "Soccer"
    },
    "11409": {
        "name": "Australia Tasmania Premier League",
        "sport": "Soccer"
    },
    "14618": {
        "name": "Australia Tasmania South Division 1",
        "sport": "Soccer"
    },
    "15294": {
        "name": "Australia Tasmania Super League Women",
        "sport": "Soccer"
    },
    "11013": {
        "name": "Australia Tasmania Victory League",
        "sport": "Soccer"
    },
    "14559": {
        "name": "Australia Victoria Cup Women",
        "sport": "Soccer"
    },
    "8522": {
        "name": "Australia Victoria NPL2 U20 League",
        "sport": "Soccer"
    },
    "8927": {
        "name": "Australia Victoria Premier League",
        "sport": "Soccer"
    },
    "8507": {
        "name": "Australia Victoria Premier League 2",
        "sport": "Soccer"
    },
    "10062": {
        "name": "Australia Victoria Premier League Women",
        "sport": "Soccer"
    },
    "13000": {
        "name": "Australia Victoria State League 1",
        "sport": "Soccer"
    },
    "14561": {
        "name": "Australia Victoria State League 2",
        "sport": "Soccer"
    },
    "9029": {
        "name": "Australia Victoria U20 League",
        "sport": "Soccer"
    },
    "303": {
        "name": "Australia WA Premier League Women",
        "sport": "Soccer"
    },
    "9378": {
        "name": "Australia Western Australia Premier League",
        "sport": "Soccer"
    },
    "907": {
        "name": "Australia Western Australia State League 1",
        "sport": "Soccer"
    },
    "9524": {
        "name": "Australia Western Australia U20 League",
        "sport": "Soccer"
    },
    "2271": {
        "name": "Australia Women Premier League",
        "sport": "Soccer"
    },
    "8473": {
        "name": "Australian Matches",
        "sport": "Soccer"
    },
    "710": {
        "name": "Austria 2. Landesliga",
        "sport": "Soccer"
    },
    "653": {
        "name": "Austria Amateur Cup",
        "sport": "Soccer"
    },
    "531": {
        "name": "Austria Bundesliga",
        "sport": "Soccer"
    },
    "650": {
        "name": "Austria Cup",
        "sport": "Soccer"
    },
    "666": {
        "name": "Austria Erste Liga",
        "sport": "Soccer"
    },
    "333": {
        "name": "Austria Landesliga",
        "sport": "Soccer"
    },
    "948": {
        "name": "Austria League 1 Women",
        "sport": "Soccer"
    },
    "82": {
        "name": "Austria Regionalliga Mitte",
        "sport": "Soccer"
    },
    "345": {
        "name": "Austria Regionalliga Ost",
        "sport": "Soccer"
    },
    "84": {
        "name": "Austria Regionalliga West",
        "sport": "Soccer"
    },
    "5286": {
        "name": "Azerbaijan Cup",
        "sport": "Soccer"
    },
    "751": {
        "name": "Azerbaijan Division 1",
        "sport": "Soccer"
    },
    "524": {
        "name": "Azerbaijan Premier League",
        "sport": "Soccer"
    },
    "1428": {
        "name": "Azerbaijan U19 League",
        "sport": "Soccer"
    },
    "2708": {
        "name": "Bahrain Cup",
        "sport": "Soccer"
    },
    "955": {
        "name": "Bahrain Division 2",
        "sport": "Soccer"
    },
    "5920": {
        "name": "Bahrain Kings Cup",
        "sport": "Soccer"
    },
    "541": {
        "name": "Bahrain Premier League",
        "sport": "Soccer"
    },
    "8322": {
        "name": "Bangalore A Division",
        "sport": "Soccer"
    },
    "8333": {
        "name": "Bangalore A Division - 80 mins play",
        "sport": "Soccer"
    },
    "8341": {
        "name": "Bangalore Super Division",
        "sport": "Soccer"
    },
    "2219": {
        "name": "Bangladesh Championship League",
        "sport": "Soccer"
    },
    "626": {
        "name": "Bangladesh Premier League",
        "sport": "Soccer"
    },
    "7607": {
        "name": "Barbados Premier League",
        "sport": "Soccer"
    },
    "2224": {
        "name": "Beach Soccer - 36 mins play",
        "sport": "Soccer"
    },
    "699": {
        "name": "Belarus Cup",
        "sport": "Soccer"
    },
    "2229": {
        "name": "Belarus Cup Women",
        "sport": "Soccer"
    },
    "510": {
        "name": "Belarus Division 1",
        "sport": "Soccer"
    },
    "520": {
        "name": "Belarus Premier League",
        "sport": "Soccer"
    },
    "2158": {
        "name": "Belarus Premier League Women",
        "sport": "Soccer"
    },
    "11078": {
        "name": "Belarus Super Cup",
        "sport": "Soccer"
    },
    "15502": {
        "name": "Belarus Women Super Cup",
        "sport": "Soccer"
    },
    "655": {
        "name": "Belgium Cup",
        "sport": "Soccer"
    },
    "2202": {
        "name": "Belgium Cup Women",
        "sport": "Soccer"
    },
    "4531": {
        "name": "Belgium Division 1 Women",
        "sport": "Soccer"
    },
    "142": {
        "name": "Belgium First Amateur Division",
        "sport": "Soccer"
    },
    "108": {
        "name": "Belgium First Division A",
        "sport": "Soccer"
    },
    "12249": {
        "name": "Belgium First Division A Play-Offs",
        "sport": "Soccer"
    },
    "126": {
        "name": "Belgium First Division B",
        "sport": "Soccer"
    },
    "10562": {
        "name": "Belgium First Division B Play-Offs",
        "sport": "Soccer"
    },
    "5836": {
        "name": "Belgium League Women",
        "sport": "Soccer"
    },
    "611": {
        "name": "Belgium Reserve League",
        "sport": "Soccer"
    },
    "779": {
        "name": "Belgium Super League Women",
        "sport": "Soccer"
    },
    "1371": {
        "name": "Belgium U21 Cup",
        "sport": "Soccer"
    },
    "13650": {
        "name": "Belgium UEFA Europa League Play Offs",
        "sport": "Soccer"
    },
    "3960": {
        "name": "Belgium Youth League",
        "sport": "Soccer"
    },
    "5753": {
        "name": "Belize Premier League",
        "sport": "Soccer"
    },
    "213": {
        "name": "Bolivia Apertura",
        "sport": "Soccer"
    },
    "8193": {
        "name": "Bolivia Clausura",
        "sport": "Soccer"
    },
    "2301": {
        "name": "Bolivia Nacional B",
        "sport": "Soccer"
    },
    "1343": {
        "name": "Bosnia & Herzegovina 1st League",
        "sport": "Soccer"
    },
    "702": {
        "name": "Bosnia & Herzegovina Cup",
        "sport": "Soccer"
    },
    "527": {
        "name": "Bosnia & Herzegovina Premier Liga",
        "sport": "Soccer"
    },
    "4549": {
        "name": "Botswana Premier League",
        "sport": "Soccer"
    },
    "13928": {
        "name": "Brazil Campeonato Acreano",
        "sport": "Soccer"
    },
    "7725": {
        "name": "Brazil Campeonato Alagoano",
        "sport": "Soccer"
    },
    "8194": {
        "name": "Brazil Campeonato Baiano",
        "sport": "Soccer"
    },
    "15259": {
        "name": "Brazil Campeonato Baiano 2",
        "sport": "Soccer"
    },
    "11410": {
        "name": "Brazil Campeonato Brasileiro Women",
        "sport": "Soccer"
    },
    "8566": {
        "name": "Brazil Campeonato Brasiliense",
        "sport": "Soccer"
    },
    "6816": {
        "name": "Brazil Campeonato Carioca",
        "sport": "Soccer"
    },
    "136": {
        "name": "Brazil Campeonato Carioca B",
        "sport": "Soccer"
    },
    "8104": {
        "name": "Brazil Campeonato Catarinense",
        "sport": "Soccer"
    },
    "7449": {
        "name": "Brazil Campeonato Cearense",
        "sport": "Soccer"
    },
    "8195": {
        "name": "Brazil Campeonato Gaucho",
        "sport": "Soccer"
    },
    "10780": {
        "name": "Brazil Campeonato Gaucho 2",
        "sport": "Soccer"
    },
    "8103": {
        "name": "Brazil Campeonato Goiano",
        "sport": "Soccer"
    },
    "7727": {
        "name": "Brazil Campeonato Maranhense",
        "sport": "Soccer"
    },
    "8196": {
        "name": "Brazil Campeonato Matogrossense",
        "sport": "Soccer"
    },
    "8146": {
        "name": "Brazil Campeonato Mineiro",
        "sport": "Soccer"
    },
    "14115": {
        "name": "Brazil Campeonato Mineiro 2",
        "sport": "Soccer"
    },
    "6712": {
        "name": "Brazil Campeonato Paraibano",
        "sport": "Soccer"
    },
    "8106": {
        "name": "Brazil Campeonato Paranaense",
        "sport": "Soccer"
    },
    "2281": {
        "name": "Brazil Campeonato Paranaense U19",
        "sport": "Soccer"
    },
    "8518": {
        "name": "Brazil Campeonato Paulista",
        "sport": "Soccer"
    },
    "8149": {
        "name": "Brazil Campeonato Paulista A2",
        "sport": "Soccer"
    },
    "8153": {
        "name": "Brazil Campeonato Paulista A3",
        "sport": "Soccer"
    },
    "147": {
        "name": "Brazil Campeonato Paulista U20",
        "sport": "Soccer"
    },
    "1437": {
        "name": "Brazil Campeonato Pernambucano",
        "sport": "Soccer"
    },
    "8387": {
        "name": "Brazil Campeonato Piauiense",
        "sport": "Soccer"
    },
    "7097": {
        "name": "Brazil Campeonato Potiguar",
        "sport": "Soccer"
    },
    "1438": {
        "name": "Brazil Campeonato Sergipano",
        "sport": "Soccer"
    },
    "4118": {
        "name": "Brazil Catarinense 2",
        "sport": "Soccer"
    },
    "7189": {
        "name": "Brazil Cearense 1st Division",
        "sport": "Soccer"
    },
    "215": {
        "name": "Brazil Copa Gaucho",
        "sport": "Soccer"
    },
    "1434": {
        "name": "Brazil Copa Gaucho U19",
        "sport": "Soccer"
    },
    "4071": {
        "name": "Brazil Copa Nordeste",
        "sport": "Soccer"
    },
    "219": {
        "name": "Brazil Copa Rio",
        "sport": "Soccer"
    },
    "9142": {
        "name": "Brazil Copa Verde",
        "sport": "Soccer"
    },
    "8816": {
        "name": "Brazil Paraense",
        "sport": "Soccer"
    },
    "511": {
        "name": "Brazil Paulista Cup",
        "sport": "Soccer"
    },
    "151": {
        "name": "Brazil Paulista Serie B",
        "sport": "Soccer"
    },
    "14751": {
        "name": "Brazil Paulista Women",
        "sport": "Soccer"
    },
    "7948": {
        "name": "Brazil Primeira Liga",
        "sport": "Soccer"
    },
    "6446": {
        "name": "Brazil Sao Paulo Youth Cup",
        "sport": "Soccer"
    },
    "211": {
        "name": "Brazil Serie A",
        "sport": "Soccer"
    },
    "207": {
        "name": "Brazil Serie B",
        "sport": "Soccer"
    },
    "552": {
        "name": "Brazil Serie C",
        "sport": "Soccer"
    },
    "260": {
        "name": "Brazil Serie D",
        "sport": "Soccer"
    },
    "678": {
        "name": "Brazil Super Copa Gaucho",
        "sport": "Soccer"
    },
    "1023": {
        "name": "Brazil U20 Cup",
        "sport": "Soccer"
    },
    "662": {
        "name": "Brazil U20 League",
        "sport": "Soccer"
    },
    "194": {
        "name": "Brazilian Matches",
        "sport": "Soccer"
    },
    "1772": {
        "name": "Bulgaria Cup",
        "sport": "Soccer"
    },
    "165": {
        "name": "Bulgaria First League",
        "sport": "Soccer"
    },
    "6084": {
        "name": "Burundi Cup",
        "sport": "Soccer"
    },
    "4499": {
        "name": "Burundi Premier League",
        "sport": "Soccer"
    },
    "10174": {
        "name": "CAF African Youth Championship",
        "sport": "Soccer"
    },
    "791": {
        "name": "CAF Champions League",
        "sport": "Soccer"
    },
    "258": {
        "name": "CAF Confederations Cup",
        "sport": "Soccer"
    },
    "9774": {
        "name": "CAF Super Cup",
        "sport": "Soccer"
    },
    "346": {
        "name": "Calcutta Football League",
        "sport": "Soccer"
    },
    "9621": {
        "name": "Cambodia Premier League",
        "sport": "Soccer"
    },
    "691": {
        "name": "Cameroon Cup",
        "sport": "Soccer"
    },
    "10066": {
        "name": "Cameroon Elite One",
        "sport": "Soccer"
    },
    "10318": {
        "name": "Cameroon Elite Two",
        "sport": "Soccer"
    },
    "2209": {
        "name": "Central America - World Cup Qualifying",
        "sport": "Soccer"
    },
    "6998": {
        "name": "Central America Cup",
        "sport": "Soccer"
    },
    "3071": {
        "name": "CFU Caribbean Cup",
        "sport": "Soccer"
    },
    "10746": {
        "name": "CFU Club Championship",
        "sport": "Soccer"
    },
    "6801": {
        "name": "Cheshire Senior Cup",
        "sport": "Soccer"
    },
    "784": {
        "name": "Chile Apertura",
        "sport": "Soccer"
    },
    "8415": {
        "name": "Chile Clausura",
        "sport": "Soccer"
    },
    "715": {
        "name": "Chile Cup",
        "sport": "Soccer"
    },
    "937": {
        "name": "Chile Primera B",
        "sport": "Soccer"
    },
    "959": {
        "name": "Chile Segunda",
        "sport": "Soccer"
    },
    "1742": {
        "name": "Chile Tercera",
        "sport": "Soccer"
    },
    "327": {
        "name": "China Division 1",
        "sport": "Soccer"
    },
    "14757": {
        "name": "China Division 2",
        "sport": "Soccer"
    },
    "689": {
        "name": "China FA Cup",
        "sport": "Soccer"
    },
    "443": {
        "name": "China Super League",
        "sport": "Soccer"
    },
    "15261": {
        "name": "China Super League - Women",
        "sport": "Soccer"
    },
    "9966": {
        "name": "Chinese Matches",
        "sport": "Soccer"
    },
    "14077": {
        "name": "Chinese Taipei Intercity League",
        "sport": "Soccer"
    },
    "1137": {
        "name": "Colombia Cup",
        "sport": "Soccer"
    },
    "12100": {
        "name": "Colombia Liga Femenina",
        "sport": "Soccer"
    },
    "243": {
        "name": "Colombia Primera A",
        "sport": "Soccer"
    },
    "214": {
        "name": "Colombia Primera B",
        "sport": "Soccer"
    },
    "7830": {
        "name": "Colombia Super Cup",
        "sport": "Soccer"
    },
    "1148": {
        "name": "Colombia U19 Championship",
        "sport": "Soccer"
    },
    "1024": {
        "name": "CONCACAF Champions League",
        "sport": "Soccer"
    },
    "13602": {
        "name": "CONCACAF Gold Cup",
        "sport": "Soccer"
    },
    "1738": {
        "name": "CONCACAF U20 Championship",
        "sport": "Soccer"
    },
    "717": {
        "name": "Copa do Brasil",
        "sport": "Soccer"
    },
    "712": {
        "name": "Copa do Brazil Women",
        "sport": "Soccer"
    },
    "7872": {
        "name": "Copa Libertadores",
        "sport": "Soccer"
    },
    "1117": {
        "name": "Copa Peru",
        "sport": "Soccer"
    },
    "663": {
        "name": "Copa Sudamericana",
        "sport": "Soccer"
    },
    "4574": {
        "name": "Coppa Italia",
        "sport": "Soccer"
    },
    "5590": {
        "name": "Cosafa U20 Cup",
        "sport": "Soccer"
    },
    "291": {
        "name": "Costa Rica Primera Division",
        "sport": "Soccer"
    },
    "554": {
        "name": "Costa Rica Segunda",
        "sport": "Soccer"
    },
    "660": {
        "name": "County Antrim Shield",
        "sport": "Soccer"
    },
    "57": {
        "name": "Croatia 1.HNL",
        "sport": "Soccer"
    },
    "701": {
        "name": "Croatia 2.HNL",
        "sport": "Soccer"
    },
    "1019": {
        "name": "Croatia 3.HNL",
        "sport": "Soccer"
    },
    "634": {
        "name": "Croatia Cup",
        "sport": "Soccer"
    },
    "761": {
        "name": "Croatia U19 League",
        "sport": "Soccer"
    },
    "10261": {
        "name": "Cuba Campeonato Nacional",
        "sport": "Soccer"
    },
    "9688": {
        "name": "Curacao League",
        "sport": "Soccer"
    },
    "1807": {
        "name": "Cyprus Cup",
        "sport": "Soccer"
    },
    "14257": {
        "name": "Cyprus Cup Women",
        "sport": "Soccer"
    },
    "75": {
        "name": "Cyprus Division 1",
        "sport": "Soccer"
    },
    "766": {
        "name": "Cyprus Division 2",
        "sport": "Soccer"
    },
    "2304": {
        "name": "Cyprus U21 Division 1",
        "sport": "Soccer"
    },
    "5727": {
        "name": "Cyprus Women Division 1",
        "sport": "Soccer"
    },
    "534": {
        "name": "Czech 2. Liga",
        "sport": "Soccer"
    },
    "913": {
        "name": "Czech 3. Ligy",
        "sport": "Soccer"
    },
    "1605": {
        "name": "Czech 4. Ligy",
        "sport": "Soccer"
    },
    "770": {
        "name": "Czech 5. Ligy",
        "sport": "Soccer"
    },
    "641": {
        "name": "Czech Cup",
        "sport": "Soccer"
    },
    "94": {
        "name": "Czech First League",
        "sport": "Soccer"
    },
    "941": {
        "name": "Czech U21 League",
        "sport": "Soccer"
    },
    "1075": {
        "name": "Czech Women Div 1",
        "sport": "Soccer"
    },
    "514": {
        "name": "Czech Youth League",
        "sport": "Soccer"
    },
    "1436": {
        "name": "Denmark 1.Division Women",
        "sport": "Soccer"
    },
    "408": {
        "name": "Denmark 2. Division Group 1",
        "sport": "Soccer"
    },
    "722": {
        "name": "Denmark 2. Division Group 2",
        "sport": "Soccer"
    },
    "720": {
        "name": "Denmark 2. Division Group 3",
        "sport": "Soccer"
    },
    "1378": {
        "name": "Denmark Cup",
        "sport": "Soccer"
    },
    "12048": {
        "name": "Denmark Cup Women",
        "sport": "Soccer"
    },
    "446": {
        "name": "Denmark Division 1",
        "sport": "Soccer"
    },
    "11972": {
        "name": "Denmark Division 2 Play-offs",
        "sport": "Soccer"
    },
    "11979": {
        "name": "Denmark Division 2 Relegation",
        "sport": "Soccer"
    },
    "919": {
        "name": "Denmark Elitedivisionen Women",
        "sport": "Soccer"
    },
    "354": {
        "name": "Denmark Fynsserien",
        "sport": "Soccer"
    },
    "468": {
        "name": "Denmark Jyllandsserien P1",
        "sport": "Soccer"
    },
    "509": {
        "name": "Denmark Jyllandsserien P2",
        "sport": "Soccer"
    },
    "425": {
        "name": "Denmark Jyllandsserien P3",
        "sport": "Soccer"
    },
    "785": {
        "name": "Denmark Jyllandsserien P4",
        "sport": "Soccer"
    },
    "374": {
        "name": "Denmark K\u00f8benhavnerserien",
        "sport": "Soccer"
    },
    "1458": {
        "name": "Denmark Reserve League",
        "sport": "Soccer"
    },
    "725": {
        "name": "Denmark Series Group 1",
        "sport": "Soccer"
    },
    "721": {
        "name": "Denmark Series Group 2",
        "sport": "Soccer"
    },
    "442": {
        "name": "Denmark Series Group 3",
        "sport": "Soccer"
    },
    "726": {
        "name": "Denmark Series Group 4",
        "sport": "Soccer"
    },
    "596": {
        "name": "Denmark Sj\u00e6llandsserien P1",
        "sport": "Soccer"
    },
    "501": {
        "name": "Denmark Sj\u00e6llandsserien P2",
        "sport": "Soccer"
    },
    "375": {
        "name": "Denmark Superligaen",
        "sport": "Soccer"
    },
    "922": {
        "name": "Denmark U19 League",
        "sport": "Soccer"
    },
    "1010": {
        "name": "Denmark U21 League",
        "sport": "Soccer"
    },
    "7971": {
        "name": "Derbyshire Senior Cup",
        "sport": "Soccer"
    },
    "11997": {
        "name": "Dominican Republic Liga",
        "sport": "Soccer"
    },
    "9016": {
        "name": "Dubai Cup",
        "sport": "Soccer"
    },
    "2296": {
        "name": "East Asian Championship",
        "sport": "Soccer"
    },
    "267": {
        "name": "Ecuador Campeonato Nacional",
        "sport": "Soccer"
    },
    "252": {
        "name": "Ecuador Primera B",
        "sport": "Soccer"
    },
    "15690": {
        "name": "Ecuador Reserve League",
        "sport": "Soccer"
    },
    "707": {
        "name": "Ecuador U19 League",
        "sport": "Soccer"
    },
    "5952": {
        "name": "Egypt Cup",
        "sport": "Soccer"
    },
    "212": {
        "name": "Egypt Division 1",
        "sport": "Soccer"
    },
    "9090": {
        "name": "Egypt Super Cup",
        "sport": "Soccer"
    },
    "287": {
        "name": "El Salvador Apertura",
        "sport": "Soccer"
    },
    "7153": {
        "name": "El Salvador Clausura",
        "sport": "Soccer"
    },
    "1819": {
        "name": "El Salvador Cup",
        "sport": "Soccer"
    },
    "240": {
        "name": "El Salvador Reserves League",
        "sport": "Soccer"
    },
    "2734": {
        "name": "Elite Club Friendlies",
        "sport": "Soccer"
    },
    "667": {
        "name": "England Championship",
        "sport": "Soccer"
    },
    "661": {
        "name": "England County Cup",
        "sport": "Soccer"
    },
    "597": {
        "name": "England EFL Cup",
        "sport": "Soccer"
    },
    "1120": {
        "name": "England EFL Trophy",
        "sport": "Soccer"
    },
    "599": {
        "name": "England League 1",
        "sport": "Soccer"
    },
    "668": {
        "name": "England League 2",
        "sport": "Soccer"
    },
    "669": {
        "name": "England National League",
        "sport": "Soccer"
    },
    "608": {
        "name": "England National League North",
        "sport": "Soccer"
    },
    "789": {
        "name": "England National League South",
        "sport": "Soccer"
    },
    "3361": {
        "name": "England Northern League Challenge Cup",
        "sport": "Soccer"
    },
    "404": {
        "name": "England Premier League",
        "sport": "Soccer"
    },
    "613": {
        "name": "England Premier League 2",
        "sport": "Soccer"
    },
    "632": {
        "name": "England Reserve Matches",
        "sport": "Soccer"
    },
    "4745": {
        "name": "England U23 Development League 2",
        "sport": "Soccer"
    },
    "1055": {
        "name": "England U23 Premier League Cup",
        "sport": "Soccer"
    },
    "10154": {
        "name": "Estonia - Super Cup",
        "sport": "Soccer"
    },
    "636": {
        "name": "Estonia Cup",
        "sport": "Soccer"
    },
    "15535": {
        "name": "Estonia Cup Women",
        "sport": "Soccer"
    },
    "917": {
        "name": "Estonia Esiliiga",
        "sport": "Soccer"
    },
    "767": {
        "name": "Estonia Esiliiga B",
        "sport": "Soccer"
    },
    "764": {
        "name": "Estonia Meistriliiga",
        "sport": "Soccer"
    },
    "704": {
        "name": "Estonia Meistriliiga Women",
        "sport": "Soccer"
    },
    "2930": {
        "name": "Estonia Play-offs",
        "sport": "Soccer"
    },
    "3076": {
        "name": "Ethiopia Premier League",
        "sport": "Soccer"
    },
    "1027": {
        "name": "Europe - World Cup Qualifying",
        "sport": "Soccer"
    },
    "1143": {
        "name": "Europe Friendlies",
        "sport": "Soccer"
    },
    "12587": {
        "name": "European U19 Championship",
        "sport": "Soccer"
    },
    "1134": {
        "name": "European U19 Championship Qual",
        "sport": "Soccer"
    },
    "1138": {
        "name": "European U21 Championship Qual",
        "sport": "Soccer"
    },
    "2196": {
        "name": "FA Cup",
        "sport": "Soccer"
    },
    "624": {
        "name": "FA Cup Qual",
        "sport": "Soccer"
    },
    "1342": {
        "name": "FA Trophy",
        "sport": "Soccer"
    },
    "1152": {
        "name": "FA Women\u2019s Premier",
        "sport": "Soccer"
    },
    "935": {
        "name": "FA WSL",
        "sport": "Soccer"
    },
    "933": {
        "name": "FA WSL 2",
        "sport": "Soccer"
    },
    "1092": {
        "name": "FA WSL League Cup",
        "sport": "Soccer"
    },
    "1090": {
        "name": "FAI Cup",
        "sport": "Soccer"
    },
    "2302": {
        "name": "FAI Womens Cup",
        "sport": "Soccer"
    },
    "12181": {
        "name": "Faroe Islands Premier League",
        "sport": "Soccer"
    },
    "5588": {
        "name": "FIFA Club World Cup",
        "sport": "Soccer"
    },
    "13555": {
        "name": "FIFA Confederations Cup",
        "sport": "Soccer"
    },
    "1140": {
        "name": "Fiji Cup",
        "sport": "Soccer"
    },
    "298": {
        "name": "Fiji National League",
        "sport": "Soccer"
    },
    "612": {
        "name": "Finland Cup",
        "sport": "Soccer"
    },
    "494": {
        "name": "Finland Division 1",
        "sport": "Soccer"
    },
    "462": {
        "name": "Finland Kakkonen Group A",
        "sport": "Soccer"
    },
    "463": {
        "name": "Finland Kakkonen Group B",
        "sport": "Soccer"
    },
    "947": {
        "name": "Finland Kakkonen Group C",
        "sport": "Soccer"
    },
    "648": {
        "name": "Finland Kolmonen",
        "sport": "Soccer"
    },
    "951": {
        "name": "Finland U20 League",
        "sport": "Soccer"
    },
    "646": {
        "name": "Finland Veikkausliiga",
        "sport": "Soccer"
    },
    "1813": {
        "name": "Finland Veikkausliiga Play-Offs",
        "sport": "Soccer"
    },
    "918": {
        "name": "Finland Ykkonen Women",
        "sport": "Soccer"
    },
    "1160": {
        "name": "Finnish Kakkonnen Play Offs",
        "sport": "Soccer"
    },
    "926": {
        "name": "Finnish Naisten Liiga Women",
        "sport": "Soccer"
    },
    "7391": {
        "name": "France -Division 2 Women",
        "sport": "Soccer"
    },
    "706": {
        "name": "France CFA",
        "sport": "Soccer"
    },
    "1575": {
        "name": "France CFA 2",
        "sport": "Soccer"
    },
    "1169": {
        "name": "France Cup",
        "sport": "Soccer"
    },
    "6664": {
        "name": "France Cup Women",
        "sport": "Soccer"
    },
    "1102": {
        "name": "France Division 1 Women",
        "sport": "Soccer"
    },
    "111": {
        "name": "France Ligue 1",
        "sport": "Soccer"
    },
    "593": {
        "name": "France Ligue 2",
        "sport": "Soccer"
    },
    "780": {
        "name": "France National",
        "sport": "Soccer"
    },
    "2787": {
        "name": "France U19 Cup",
        "sport": "Soccer"
    },
    "349": {
        "name": "France U19 League",
        "sport": "Soccer"
    },
    "1760": {
        "name": "French League Cup",
        "sport": "Soccer"
    },
    "2650": {
        "name": "Friendlies",
        "sport": "Soccer"
    },
    "9290": {
        "name": "Friendly Match - 80 mins play",
        "sport": "Soccer"
    },
    "1709": {
        "name": "Georgia Cup",
        "sport": "Soccer"
    },
    "15154": {
        "name": "Georgia Erovnuli Liga",
        "sport": "Soccer"
    },
    "15155": {
        "name": "Georgia Erovnuli Liga",
        "sport": "Soccer"
    },
    "1747": {
        "name": "Georgia Umaglesi Liga",
        "sport": "Soccer"
    },
    "943": {
        "name": "German Bundesliga Women",
        "sport": "Soccer"
    },
    "1022": {
        "name": "German Cup",
        "sport": "Soccer"
    },
    "1163": {
        "name": "German Landespokal",
        "sport": "Soccer"
    },
    "651": {
        "name": "Germany 3.Liga",
        "sport": "Soccer"
    },
    "515": {
        "name": "Germany Bundesliga I",
        "sport": "Soccer"
    },
    "436": {
        "name": "Germany Bundesliga II",
        "sport": "Soccer"
    },
    "2259": {
        "name": "Germany Bundesliga II Women",
        "sport": "Soccer"
    },
    "348": {
        "name": "Germany Bundesliga U19",
        "sport": "Soccer"
    },
    "1698": {
        "name": "Germany DFB Pokal",
        "sport": "Soccer"
    },
    "1162": {
        "name": "Germany DFB Pokal Women",
        "sport": "Soccer"
    },
    "461": {
        "name": "Germany Oberliga Baden-Wuerttemberg",
        "sport": "Soccer"
    },
    "924": {
        "name": "Germany Oberliga Bayern North",
        "sport": "Soccer"
    },
    "525": {
        "name": "Germany Oberliga Bayern South",
        "sport": "Soccer"
    },
    "2162": {
        "name": "Germany Oberliga Bremen",
        "sport": "Soccer"
    },
    "417": {
        "name": "Germany Oberliga Hamburg",
        "sport": "Soccer"
    },
    "503": {
        "name": "Germany Oberliga Hessen",
        "sport": "Soccer"
    },
    "507": {
        "name": "Germany Oberliga Mittelrhein",
        "sport": "Soccer"
    },
    "504": {
        "name": "Germany Oberliga Niederrhein",
        "sport": "Soccer"
    },
    "506": {
        "name": "Germany Oberliga Niedersachsen",
        "sport": "Soccer"
    },
    "459": {
        "name": "Germany Oberliga NOFV Nord",
        "sport": "Soccer"
    },
    "418": {
        "name": "Germany Oberliga NOFV Sud",
        "sport": "Soccer"
    },
    "508": {
        "name": "Germany Oberliga Rheinland-Pfalz\/Saar",
        "sport": "Soccer"
    },
    "460": {
        "name": "Germany Oberliga Schleswig-Holstein",
        "sport": "Soccer"
    },
    "505": {
        "name": "Germany Oberliga Westfalen",
        "sport": "Soccer"
    },
    "62": {
        "name": "Germany Regionalliga Bayern",
        "sport": "Soccer"
    },
    "415": {
        "name": "Germany Regionalliga North",
        "sport": "Soccer"
    },
    "410": {
        "name": "Germany Regionalliga North East",
        "sport": "Soccer"
    },
    "647": {
        "name": "Germany Regionalliga South West",
        "sport": "Soccer"
    },
    "455": {
        "name": "Germany Regionalliga West",
        "sport": "Soccer"
    },
    "1072": {
        "name": "Germany U19 Cup",
        "sport": "Soccer"
    },
    "10481": {
        "name": "Ghana Division 1",
        "sport": "Soccer"
    },
    "9282": {
        "name": "Ghana Premier League",
        "sport": "Soccer"
    },
    "9177": {
        "name": "Gibraltar Cup",
        "sport": "Soccer"
    },
    "713": {
        "name": "Gibraltar Premier Division",
        "sport": "Soccer"
    },
    "403": {
        "name": "Goa Pro League",
        "sport": "Soccer"
    },
    "1787": {
        "name": "Greece Cup",
        "sport": "Soccer"
    },
    "2163": {
        "name": "Greece Football League",
        "sport": "Soccer"
    },
    "1370": {
        "name": "Greece Football League 2",
        "sport": "Soccer"
    },
    "10393": {
        "name": "Greece Football League U19",
        "sport": "Soccer"
    },
    "72": {
        "name": "Greece Super League",
        "sport": "Soccer"
    },
    "334": {
        "name": "Greece Super League U20",
        "sport": "Soccer"
    },
    "2161": {
        "name": "Greece Super League Women",
        "sport": "Soccer"
    },
    "1755": {
        "name": "Grenada Premier Division",
        "sport": "Soccer"
    },
    "269": {
        "name": "Guatemala Liga Nacional",
        "sport": "Soccer"
    },
    "543": {
        "name": "Guatemala Primera Division",
        "sport": "Soccer"
    },
    "4540": {
        "name": "Guyana Elite League",
        "sport": "Soccer"
    },
    "2311": {
        "name": "Haiti Division 1",
        "sport": "Soccer"
    },
    "643": {
        "name": "Holland Cup",
        "sport": "Soccer"
    },
    "5889": {
        "name": "Holland Derde Divisie",
        "sport": "Soccer"
    },
    "723": {
        "name": "Holland Eerste Divisie",
        "sport": "Soccer"
    },
    "98": {
        "name": "Holland Eredivisie",
        "sport": "Soccer"
    },
    "778": {
        "name": "Holland Eredivisie Women",
        "sport": "Soccer"
    },
    "1001": {
        "name": "Holland Reserve League",
        "sport": "Soccer"
    },
    "472": {
        "name": "Holland Tweede Divisie",
        "sport": "Soccer"
    },
    "11456": {
        "name": "Holland Youth Cup",
        "sport": "Soccer"
    },
    "690": {
        "name": "Holland Youth Eredivisie",
        "sport": "Soccer"
    },
    "15501": {
        "name": "Honduras Cup",
        "sport": "Soccer"
    },
    "251": {
        "name": "Honduras Liga Nacional",
        "sport": "Soccer"
    },
    "317": {
        "name": "Hong Kong 1st Division",
        "sport": "Soccer"
    },
    "1118": {
        "name": "Hong Kong 2nd Division",
        "sport": "Soccer"
    },
    "2877": {
        "name": "Hong Kong 3rd Division",
        "sport": "Soccer"
    },
    "5868": {
        "name": "Hong Kong Cup",
        "sport": "Soccer"
    },
    "753": {
        "name": "Hong Kong Premier League",
        "sport": "Soccer"
    },
    "1435": {
        "name": "Hong Kong Reserve Division",
        "sport": "Soccer"
    },
    "1665": {
        "name": "Hong Kong Sapling Cup",
        "sport": "Soccer"
    },
    "325": {
        "name": "Hong Kong Senior Shield",
        "sport": "Soccer"
    },
    "5415": {
        "name": "Hong Kong Women Premier League",
        "sport": "Soccer"
    },
    "687": {
        "name": "Hungary Cup",
        "sport": "Soccer"
    },
    "178": {
        "name": "Hungary NB I",
        "sport": "Soccer"
    },
    "528": {
        "name": "Hungary NB II",
        "sport": "Soccer"
    },
    "942": {
        "name": "Hungary NB III",
        "sport": "Soccer"
    },
    "910": {
        "name": "Hungary U19 1st Division",
        "sport": "Soccer"
    },
    "911": {
        "name": "Hungary U19 2nd Division",
        "sport": "Soccer"
    },
    "1067": {
        "name": "Hungary Women NBI",
        "sport": "Soccer"
    },
    "788": {
        "name": "Iceland 1 Deild",
        "sport": "Soccer"
    },
    "765": {
        "name": "Iceland 1 Deild Women",
        "sport": "Soccer"
    },
    "6717": {
        "name": "Iceland Cup",
        "sport": "Soccer"
    },
    "6716": {
        "name": "Iceland Cup Women",
        "sport": "Soccer"
    },
    "9562": {
        "name": "Iceland League Cup",
        "sport": "Soccer"
    },
    "526": {
        "name": "Iceland Premier League",
        "sport": "Soccer"
    },
    "930": {
        "name": "Iceland Premier League Women",
        "sport": "Soccer"
    },
    "3833": {
        "name": "Iceland U19 Cup",
        "sport": "Soccer"
    },
    "469": {
        "name": "Iceland U19 League",
        "sport": "Soccer"
    },
    "13620": {
        "name": "Iceland Women U19 Cup",
        "sport": "Soccer"
    },
    "10280": {
        "name": "India Chennai Senior Division",
        "sport": "Soccer"
    },
    "3099": {
        "name": "India DSK Cup",
        "sport": "Soccer"
    },
    "13857": {
        "name": "India Goa First Division",
        "sport": "Soccer"
    },
    "686": {
        "name": "India Goa U20 League",
        "sport": "Soccer"
    },
    "6609": {
        "name": "India I-League",
        "sport": "Soccer"
    },
    "7765": {
        "name": "India I-League 2nd Division",
        "sport": "Soccer"
    },
    "8818": {
        "name": "India League Women",
        "sport": "Soccer"
    },
    "747": {
        "name": "India Mizoram Premier League",
        "sport": "Soccer"
    },
    "15525": {
        "name": "India Pune Super Division",
        "sport": "Soccer"
    },
    "6250": {
        "name": "India Santosh Trophy",
        "sport": "Soccer"
    },
    "1017": {
        "name": "India Shillong Premier League",
        "sport": "Soccer"
    },
    "1086": {
        "name": "India Super League",
        "sport": "Soccer"
    },
    "8553": {
        "name": "Indonesia Cup",
        "sport": "Soccer"
    },
    "352": {
        "name": "Indonesia Soccer Championship A",
        "sport": "Soccer"
    },
    "1066": {
        "name": "Indonesia Soccer Championship B",
        "sport": "Soccer"
    },
    "1119": {
        "name": "Indonesia Super League U21",
        "sport": "Soccer"
    },
    "15264": {
        "name": "Indonesia Super Liga",
        "sport": "Soccer"
    },
    "1146": {
        "name": "International Match",
        "sport": "Soccer"
    },
    "2193": {
        "name": "Iran Cup",
        "sport": "Soccer"
    },
    "754": {
        "name": "Iran Div 1",
        "sport": "Soccer"
    },
    "640": {
        "name": "Iran Pro League",
        "sport": "Soccer"
    },
    "7988": {
        "name": "Ireland - Munster Senior Cup",
        "sport": "Soccer"
    },
    "9375": {
        "name": "Ireland Cup",
        "sport": "Soccer"
    },
    "8729": {
        "name": "Ireland FAI Intermediate Cup",
        "sport": "Soccer"
    },
    "12438": {
        "name": "Ireland League Cup",
        "sport": "Soccer"
    },
    "622": {
        "name": "Ireland Leinster Senior League",
        "sport": "Soccer"
    },
    "6576": {
        "name": "Ireland Munster Senior League",
        "sport": "Soccer"
    },
    "1088": {
        "name": "Ireland National League Women",
        "sport": "Soccer"
    },
    "15109": {
        "name": "Ireland U19 League",
        "sport": "Soccer"
    },
    "8031": {
        "name": "Ireland Ulster Senior League",
        "sport": "Soccer"
    },
    "627": {
        "name": "Israel Cup",
        "sport": "Soccer"
    },
    "9778": {
        "name": "Israel Cup Women",
        "sport": "Soccer"
    },
    "591": {
        "name": "Israel Leumit Liga",
        "sport": "Soccer"
    },
    "748": {
        "name": "Israel Liga Alef North",
        "sport": "Soccer"
    },
    "749": {
        "name": "Israel Liga Alef South",
        "sport": "Soccer"
    },
    "957": {
        "name": "Israel Liga Bet North",
        "sport": "Soccer"
    },
    "745": {
        "name": "Israel Liga Bet South",
        "sport": "Soccer"
    },
    "58": {
        "name": "Israel Premier League",
        "sport": "Soccer"
    },
    "2511": {
        "name": "Israel Women Division 1",
        "sport": "Soccer"
    },
    "5368": {
        "name": "Israel Youth Cup",
        "sport": "Soccer"
    },
    "908": {
        "name": "Israel Youth League",
        "sport": "Soccer"
    },
    "1380": {
        "name": "Isthmian Cup",
        "sport": "Soccer"
    },
    "2735": {
        "name": "Italy Amateur Cup",
        "sport": "Soccer"
    },
    "944": {
        "name": "Italy Campionato Nazionale",
        "sport": "Soccer"
    },
    "351": {
        "name": "Italy Campionato Primavera",
        "sport": "Soccer"
    },
    "5719": {
        "name": "Italy Eccellenza",
        "sport": "Soccer"
    },
    "1660": {
        "name": "Italy Lega Pro Cup",
        "sport": "Soccer"
    },
    "485": {
        "name": "Italy Lega Pro Group A",
        "sport": "Soccer"
    },
    "187": {
        "name": "Italy Lega Pro Group B",
        "sport": "Soccer"
    },
    "489": {
        "name": "Italy Lega Pro Group C",
        "sport": "Soccer"
    },
    "683": {
        "name": "Italy Primavera Cup",
        "sport": "Soccer"
    },
    "1825": {
        "name": "Italy Primavera Supercup",
        "sport": "Soccer"
    },
    "6559": {
        "name": "Italy Promozione",
        "sport": "Soccer"
    },
    "204": {
        "name": "Italy Serie A",
        "sport": "Soccer"
    },
    "594": {
        "name": "Italy Serie B",
        "sport": "Soccer"
    },
    "8970": {
        "name": "Italy Serie B Women",
        "sport": "Soccer"
    },
    "512": {
        "name": "Italy Serie D",
        "sport": "Soccer"
    },
    "1454": {
        "name": "Italy Serie D Cup",
        "sport": "Soccer"
    },
    "5134": {
        "name": "Italy Super Cup",
        "sport": "Soccer"
    },
    "1835": {
        "name": "Italy Women Serie A",
        "sport": "Soccer"
    },
    "4144": {
        "name": "Ivory Coast Premier Division",
        "sport": "Soccer"
    },
    "8735": {
        "name": "Jamaica Cup",
        "sport": "Soccer"
    },
    "556": {
        "name": "Jamaica Premier League",
        "sport": "Soccer"
    },
    "5695": {
        "name": "Jamaica Super League",
        "sport": "Soccer"
    },
    "15689": {
        "name": "Japan Challenge League Women",
        "sport": "Soccer"
    },
    "718": {
        "name": "Japan Cup",
        "sport": "Soccer"
    },
    "2273": {
        "name": "Japan Cup Women",
        "sport": "Soccer"
    },
    "310": {
        "name": "Japan Football League",
        "sport": "Soccer"
    },
    "673": {
        "name": "Japan J-League",
        "sport": "Soccer"
    },
    "1126": {
        "name": "Japan J-League Cup",
        "sport": "Soccer"
    },
    "313": {
        "name": "Japan J2-League",
        "sport": "Soccer"
    },
    "322": {
        "name": "Japan J3-League",
        "sport": "Soccer"
    },
    "305": {
        "name": "Japan L1 League Women",
        "sport": "Soccer"
    },
    "307": {
        "name": "Japan L2 League Women",
        "sport": "Soccer"
    },
    "14697": {
        "name": "Japan League Cup Women",
        "sport": "Soccer"
    },
    "9499": {
        "name": "Japan Super Cup",
        "sport": "Soccer"
    },
    "5440": {
        "name": "Jordan Cup",
        "sport": "Soccer"
    },
    "10256": {
        "name": "Jordan Division 1",
        "sport": "Soccer"
    },
    "1824": {
        "name": "Jordan League",
        "sport": "Soccer"
    },
    "696": {
        "name": "Kazakhstan Cup",
        "sport": "Soccer"
    },
    "433": {
        "name": "Kazakhstan Division 1",
        "sport": "Soccer"
    },
    "2279": {
        "name": "Kazakhstan Play Offs",
        "sport": "Soccer"
    },
    "390": {
        "name": "Kazakhstan Premier League",
        "sport": "Soccer"
    },
    "10583": {
        "name": "Kazakhstan Super Cup",
        "sport": "Soccer"
    },
    "1736": {
        "name": "Kazakhstan Super League Women",
        "sport": "Soccer"
    },
    "604": {
        "name": "Kenya Cup",
        "sport": "Soccer"
    },
    "750": {
        "name": "Kenya Premier League",
        "sport": "Soccer"
    },
    "10560": {
        "name": "Kosovo Superliga",
        "sport": "Soccer"
    },
    "2206": {
        "name": "Kuwait Crown Prince Cup",
        "sport": "Soccer"
    },
    "6862": {
        "name": "Kuwait Cup",
        "sport": "Soccer"
    },
    "1093": {
        "name": "Kuwait League",
        "sport": "Soccer"
    },
    "771": {
        "name": "Kuwait Super Cup",
        "sport": "Soccer"
    },
    "1323": {
        "name": "Kuwait Youth League",
        "sport": "Soccer"
    },
    "1074": {
        "name": "Latvia 1. Liga",
        "sport": "Soccer"
    },
    "645": {
        "name": "Latvia 2 Liga",
        "sport": "Soccer"
    },
    "954": {
        "name": "Latvia Cup",
        "sport": "Soccer"
    },
    "2649": {
        "name": "Latvia Play-offs",
        "sport": "Soccer"
    },
    "413": {
        "name": "Latvia Virsliga",
        "sport": "Soccer"
    },
    "7415": {
        "name": "Latvia Winter Cup",
        "sport": "Soccer"
    },
    "920": {
        "name": "Latvia Womens League",
        "sport": "Soccer"
    },
    "724": {
        "name": "League of Ireland First Division",
        "sport": "Soccer"
    },
    "1697": {
        "name": "League Of Ireland Play-Offs",
        "sport": "Soccer"
    },
    "175": {
        "name": "League of Ireland Premier Division",
        "sport": "Soccer"
    },
    "5854": {
        "name": "Lebanon Cup",
        "sport": "Soccer"
    },
    "3835": {
        "name": "Lebanon Division 2",
        "sport": "Soccer"
    },
    "756": {
        "name": "Lebanon League",
        "sport": "Soccer"
    },
    "6827": {
        "name": "Leinster Senior Cup",
        "sport": "Soccer"
    },
    "633": {
        "name": "Lithuania A Lyga",
        "sport": "Soccer"
    },
    "946": {
        "name": "Lithuania Cup",
        "sport": "Soccer"
    },
    "10183": {
        "name": "Lithuania Super Cup",
        "sport": "Soccer"
    },
    "7452": {
        "name": "Liverpool Senior Cup",
        "sport": "Soccer"
    },
    "958": {
        "name": "Luxembourg Division Nationale",
        "sport": "Soccer"
    },
    "3467": {
        "name": "Luxembourg Promotion D\u2019Honneur",
        "sport": "Soccer"
    },
    "7051": {
        "name": "Macau 1st Division",
        "sport": "Soccer"
    },
    "7679": {
        "name": "Macau 2nd Division",
        "sport": "Soccer"
    },
    "698": {
        "name": "Macedonia Cup",
        "sport": "Soccer"
    },
    "12609": {
        "name": "Macedonia Cup Women",
        "sport": "Soccer"
    },
    "952": {
        "name": "Macedonia First League",
        "sport": "Soccer"
    },
    "4425": {
        "name": "Macedonia League Women",
        "sport": "Soccer"
    },
    "10877": {
        "name": "Macedonia Second League",
        "sport": "Soccer"
    },
    "1341": {
        "name": "Malawi Super League",
        "sport": "Soccer"
    },
    "7667": {
        "name": "Malaysia Charity Shield",
        "sport": "Soccer"
    },
    "1056": {
        "name": "Malaysia Cup",
        "sport": "Soccer"
    },
    "1322": {
        "name": "Malaysia FAM Cup",
        "sport": "Soccer"
    },
    "10184": {
        "name": "Malaysia FAM League",
        "sport": "Soccer"
    },
    "746": {
        "name": "Malaysia Premier League",
        "sport": "Soccer"
    },
    "10973": {
        "name": "Malaysia President Cup",
        "sport": "Soccer"
    },
    "759": {
        "name": "Malaysia Super League",
        "sport": "Soccer"
    },
    "14619": {
        "name": "Maldives Premier League",
        "sport": "Soccer"
    },
    "925": {
        "name": "Mali Premiere Division",
        "sport": "Soccer"
    },
    "777": {
        "name": "Malta Division 1",
        "sport": "Soccer"
    },
    "10776": {
        "name": "Malta Division 2 Women",
        "sport": "Soccer"
    },
    "4759": {
        "name": "Malta FA Trophy",
        "sport": "Soccer"
    },
    "1668": {
        "name": "Malta League Women",
        "sport": "Soccer"
    },
    "144": {
        "name": "Malta Premier League",
        "sport": "Soccer"
    },
    "5956": {
        "name": "Malta Super Cup",
        "sport": "Soccer"
    },
    "5789": {
        "name": "Manchester Premier Cup",
        "sport": "Soccer"
    },
    "245": {
        "name": "Mexico Apertura",
        "sport": "Soccer"
    },
    "6449": {
        "name": "Mexico Clausura",
        "sport": "Soccer"
    },
    "1025": {
        "name": "Mexico Cup",
        "sport": "Soccer"
    },
    "263": {
        "name": "Mexico Liga de Ascenso Apertura",
        "sport": "Soccer"
    },
    "6614": {
        "name": "Mexico Liga de Ascenso Clausura",
        "sport": "Soccer"
    },
    "255": {
        "name": "Mexico Segunda Division",
        "sport": "Soccer"
    },
    "79": {
        "name": "Mexico U20 League",
        "sport": "Soccer"
    },
    "1789": {
        "name": "MLS Play-offs",
        "sport": "Soccer"
    },
    "629": {
        "name": "Moldova Cup",
        "sport": "Soccer"
    },
    "4369": {
        "name": "Moldova Cup Women",
        "sport": "Soccer"
    },
    "1018": {
        "name": "Moldova Divizia A",
        "sport": "Soccer"
    },
    "695": {
        "name": "Moldova Divizia Nationala",
        "sport": "Soccer"
    },
    "5687": {
        "name": "Moldova Women Championship",
        "sport": "Soccer"
    },
    "694": {
        "name": "Montenegro Cup",
        "sport": "Soccer"
    },
    "14487": {
        "name": "Montenegro Druga Liga",
        "sport": "Soccer"
    },
    "1607": {
        "name": "Montenegro Prva Liga",
        "sport": "Soccer"
    },
    "4113": {
        "name": "Morocco Challenge Cup",
        "sport": "Soccer"
    },
    "1021": {
        "name": "Morocco Cup",
        "sport": "Soccer"
    },
    "191": {
        "name": "Morocco GNF 1",
        "sport": "Soccer"
    },
    "1170": {
        "name": "Morocco GNF 2",
        "sport": "Soccer"
    },
    "3448": {
        "name": "Mumbai Elite League",
        "sport": "Soccer"
    },
    "7303": {
        "name": "Myanmar National League",
        "sport": "Soccer"
    },
    "14037": {
        "name": "New Zealand Central Premier League",
        "sport": "Soccer"
    },
    "1609": {
        "name": "New Zealand Football Championship",
        "sport": "Soccer"
    },
    "11873": {
        "name": "New Zealand Mainland Premier League",
        "sport": "Soccer"
    },
    "680": {
        "name": "New Zealand Northern Premier League",
        "sport": "Soccer"
    },
    "1715": {
        "name": "New Zealand Premier League Women",
        "sport": "Soccer"
    },
    "14038": {
        "name": "New Zealand South Premier League",
        "sport": "Soccer"
    },
    "2924": {
        "name": "New Zealand Youth League",
        "sport": "Soccer"
    },
    "289": {
        "name": "Nicaragua Apertura",
        "sport": "Soccer"
    },
    "8127": {
        "name": "Nicaragua Clausura",
        "sport": "Soccer"
    },
    "708": {
        "name": "Nigeria Premier League",
        "sport": "Soccer"
    },
    "1156": {
        "name": "Northern Ireland Championship",
        "sport": "Soccer"
    },
    "6623": {
        "name": "Northern Ireland Cup",
        "sport": "Soccer"
    },
    "782": {
        "name": "Northern Ireland Cup Women",
        "sport": "Soccer"
    },
    "4526": {
        "name": "Northern Ireland Intermediate Cup",
        "sport": "Soccer"
    },
    "1447": {
        "name": "Northern Ireland League Cup",
        "sport": "Soccer"
    },
    "1002": {
        "name": "Northern Ireland League Cup Women",
        "sport": "Soccer"
    },
    "4768": {
        "name": "Northern Ireland Mid Ulster Cup",
        "sport": "Soccer"
    },
    "790": {
        "name": "Northern Ireland Premier",
        "sport": "Soccer"
    },
    "9506": {
        "name": "Northern Ireland Premier Intermediate League",
        "sport": "Soccer"
    },
    "475": {
        "name": "Northern Ireland Premier League Women",
        "sport": "Soccer"
    },
    "714": {
        "name": "Northern Ireland Reserve League",
        "sport": "Soccer"
    },
    "621": {
        "name": "Northern League Division One",
        "sport": "Soccer"
    },
    "607": {
        "name": "Northern Premier League",
        "sport": "Soccer"
    },
    "600": {
        "name": "Norway Cup",
        "sport": "Soccer"
    },
    "4076": {
        "name": "Norway Cup Women",
        "sport": "Soccer"
    },
    "497": {
        "name": "Norway Division 1",
        "sport": "Soccer"
    },
    "1073": {
        "name": "Norway Division 1 Women",
        "sport": "Soccer"
    },
    "499": {
        "name": "Norway Division 2 Group 1",
        "sport": "Soccer"
    },
    "786": {
        "name": "Norway Division 2 Group 2",
        "sport": "Soccer"
    },
    "522": {
        "name": "Norway Division 2 Group 3",
        "sport": "Soccer"
    },
    "787": {
        "name": "Norway Division 2 Group 4",
        "sport": "Soccer"
    },
    "656": {
        "name": "Norway Division 3 Group 1",
        "sport": "Soccer"
    },
    "776": {
        "name": "Norway Division 3 Group 10",
        "sport": "Soccer"
    },
    "768": {
        "name": "Norway Division 3 Group 11",
        "sport": "Soccer"
    },
    "532": {
        "name": "Norway Division 3 Group 12",
        "sport": "Soccer"
    },
    "616": {
        "name": "Norway Division 3 Group 2",
        "sport": "Soccer"
    },
    "614": {
        "name": "Norway Division 3 Group 3",
        "sport": "Soccer"
    },
    "677": {
        "name": "Norway Division 3 Group 4",
        "sport": "Soccer"
    },
    "1013": {
        "name": "Norway Division 3 Group 5",
        "sport": "Soccer"
    },
    "615": {
        "name": "Norway Division 3 Group 6",
        "sport": "Soccer"
    },
    "1014": {
        "name": "Norway Division 3 Group 7",
        "sport": "Soccer"
    },
    "769": {
        "name": "Norway Division 3 Group 8",
        "sport": "Soccer"
    },
    "1015": {
        "name": "Norway Division 3 Group 9",
        "sport": "Soccer"
    },
    "652": {
        "name": "Norway Interkretsserie U19",
        "sport": "Soccer"
    },
    "13475": {
        "name": "Norway Super Cup",
        "sport": "Soccer"
    },
    "516": {
        "name": "Norway Tippeligaen",
        "sport": "Soccer"
    },
    "5021": {
        "name": "Norway Tippeligaen Playoff",
        "sport": "Soccer"
    },
    "931": {
        "name": "Norway Toppserien Women",
        "sport": "Soccer"
    },
    "3981": {
        "name": "Norway U19 Cup Women",
        "sport": "Soccer"
    },
    "4075": {
        "name": "Norway Youth Cup",
        "sport": "Soccer"
    },
    "2792": {
        "name": "Oceania - World Cup Qualifying",
        "sport": "Soccer"
    },
    "10114": {
        "name": "OFC Champions League",
        "sport": "Soccer"
    },
    "2658": {
        "name": "Oman Federation Cup",
        "sport": "Soccer"
    },
    "518": {
        "name": "Oman League",
        "sport": "Soccer"
    },
    "3669": {
        "name": "Oman Sultans Cup",
        "sport": "Soccer"
    },
    "9527": {
        "name": "Palestine Cup",
        "sport": "Soccer"
    },
    "757": {
        "name": "Palestine West Bank League",
        "sport": "Soccer"
    },
    "8383": {
        "name": "Panama Cup",
        "sport": "Soccer"
    },
    "294": {
        "name": "Panama Liga Nacional de Ascenso",
        "sport": "Soccer"
    },
    "275": {
        "name": "Panama LPF",
        "sport": "Soccer"
    },
    "241": {
        "name": "Panama Reserve League",
        "sport": "Soccer"
    },
    "217": {
        "name": "Paraguay Division Intermedia",
        "sport": "Soccer"
    },
    "262": {
        "name": "Paraguay Division Profesional",
        "sport": "Soccer"
    },
    "476": {
        "name": "Paraguay Reserve League",
        "sport": "Soccer"
    },
    "220": {
        "name": "Paraguay U20 League",
        "sport": "Soccer"
    },
    "105": {
        "name": "Peru Primera Division",
        "sport": "Soccer"
    },
    "9104": {
        "name": "Peru Reserve League",
        "sport": "Soccer"
    },
    "555": {
        "name": "Peru Segunda",
        "sport": "Soccer"
    },
    "906": {
        "name": "Philippines Ang Liga",
        "sport": "Soccer"
    },
    "7244": {
        "name": "Philippines League Women",
        "sport": "Soccer"
    },
    "8565": {
        "name": "Philippines UAAP",
        "sport": "Soccer"
    },
    "318": {
        "name": "Philippines UFL",
        "sport": "Soccer"
    },
    "630": {
        "name": "Poland Cup",
        "sport": "Soccer"
    },
    "2240": {
        "name": "Poland Cup Women",
        "sport": "Soccer"
    },
    "173": {
        "name": "Poland Ekstraklasa",
        "sport": "Soccer"
    },
    "915": {
        "name": "Poland Ekstraklasa Women",
        "sport": "Soccer"
    },
    "493": {
        "name": "Poland I Liga",
        "sport": "Soccer"
    },
    "542": {
        "name": "Poland II Liga",
        "sport": "Soccer"
    },
    "359": {
        "name": "Poland III Liga",
        "sport": "Soccer"
    },
    "682": {
        "name": "Poland Regional Cup",
        "sport": "Soccer"
    },
    "685": {
        "name": "Poland Youth League",
        "sport": "Soccer"
    },
    "529": {
        "name": "Portugal Campeonato Nacional",
        "sport": "Soccer"
    },
    "953": {
        "name": "Portugal Campeonato Nacional Women",
        "sport": "Soccer"
    },
    "927": {
        "name": "Portugal Cup",
        "sport": "Soccer"
    },
    "1166": {
        "name": "Portugal League Cup",
        "sport": "Soccer"
    },
    "92": {
        "name": "Portugal Primeira Liga",
        "sport": "Soccer"
    },
    "160": {
        "name": "Portugal Segunda Liga",
        "sport": "Soccer"
    },
    "916": {
        "name": "Portugal U19 League",
        "sport": "Soccer"
    },
    "2252": {
        "name": "Prince Faisal bin Fahad Cup",
        "sport": "Soccer"
    },
    "15546": {
        "name": "Qatar Crown Prince Cup",
        "sport": "Soccer"
    },
    "14846": {
        "name": "Qatar Cup",
        "sport": "Soccer"
    },
    "89": {
        "name": "Qatar Q League",
        "sport": "Soccer"
    },
    "90": {
        "name": "Qatar Stars League",
        "sport": "Soccer"
    },
    "14387": {
        "name": "Recopa Sudamericana",
        "sport": "Soccer"
    },
    "1133": {
        "name": "Romania Cup",
        "sport": "Soccer"
    },
    "13876": {
        "name": "Romania Cup Women",
        "sport": "Soccer"
    },
    "5938": {
        "name": "Romania League Cup",
        "sport": "Soccer"
    },
    "4607": {
        "name": "Romania Liga 1 Women",
        "sport": "Soccer"
    },
    "361": {
        "name": "Romania Liga 2",
        "sport": "Soccer"
    },
    "95": {
        "name": "Romania Liga I",
        "sport": "Soccer"
    },
    "637": {
        "name": "Romania Liga III",
        "sport": "Soccer"
    },
    "912": {
        "name": "Romania Superliga Women",
        "sport": "Soccer"
    },
    "3477": {
        "name": "Romania U19 League",
        "sport": "Soccer"
    },
    "681": {
        "name": "Russia Cup",
        "sport": "Soccer"
    },
    "792": {
        "name": "Russia Division 1",
        "sport": "Soccer"
    },
    "328": {
        "name": "Russia Division 2",
        "sport": "Soccer"
    },
    "10024": {
        "name": "Russia FNL Cup",
        "sport": "Soccer"
    },
    "530": {
        "name": "Russia Premier League",
        "sport": "Soccer"
    },
    "332": {
        "name": "Russia Premier Reserve League",
        "sport": "Soccer"
    },
    "923": {
        "name": "Russia Premier Women",
        "sport": "Soccer"
    },
    "10823": {
        "name": "Rwanda Cup",
        "sport": "Soccer"
    },
    "1564": {
        "name": "Rwanda National League",
        "sport": "Soccer"
    },
    "619": {
        "name": "Ryman Division One North",
        "sport": "Soccer"
    },
    "620": {
        "name": "Ryman Division One South",
        "sport": "Soccer"
    },
    "606": {
        "name": "Ryman Premier Division",
        "sport": "Soccer"
    },
    "783": {
        "name": "San Marino Campionato",
        "sport": "Soccer"
    },
    "4269": {
        "name": "San Marino Cup",
        "sport": "Soccer"
    },
    "7540": {
        "name": "Saudi Arabia Cup",
        "sport": "Soccer"
    },
    "762": {
        "name": "Saudi Arabia Division 1",
        "sport": "Soccer"
    },
    "1509": {
        "name": "Saudi Arabia Division 2",
        "sport": "Soccer"
    },
    "107": {
        "name": "Saudi Arabia Premier League",
        "sport": "Soccer"
    },
    "5655": {
        "name": "Saudi Arabia U20 Premier League",
        "sport": "Soccer"
    },
    "9336": {
        "name": "Saudi Arabia Youth Cup",
        "sport": "Soccer"
    },
    "1012": {
        "name": "Saudi Crown Prince Cup",
        "sport": "Soccer"
    },
    "671": {
        "name": "Scotland Championship",
        "sport": "Soccer"
    },
    "623": {
        "name": "Scotland Development League East",
        "sport": "Soccer"
    },
    "618": {
        "name": "Scotland Development League West",
        "sport": "Soccer"
    },
    "928": {
        "name": "Scotland FA Cup",
        "sport": "Soccer"
    },
    "1154": {
        "name": "Scotland Highland League",
        "sport": "Soccer"
    },
    "1155": {
        "name": "Scotland League Challenge Cup",
        "sport": "Soccer"
    },
    "598": {
        "name": "Scotland League Cup",
        "sport": "Soccer"
    },
    "670": {
        "name": "Scotland League One",
        "sport": "Soccer"
    },
    "672": {
        "name": "Scotland League Two",
        "sport": "Soccer"
    },
    "1151": {
        "name": "Scotland Lowland League",
        "sport": "Soccer"
    },
    "950": {
        "name": "Scotland Premier League Women",
        "sport": "Soccer"
    },
    "610": {
        "name": "Scotland Premier U20 League",
        "sport": "Soccer"
    },
    "407": {
        "name": "Scotland Premiership",
        "sport": "Soccer"
    },
    "13198": {
        "name": "Scotland SWPL Cup Women",
        "sport": "Soccer"
    },
    "9334": {
        "name": "Senegal League Cup",
        "sport": "Soccer"
    },
    "12430": {
        "name": "Senegal Ligue 2",
        "sport": "Soccer"
    },
    "2297": {
        "name": "Senegal Premier League",
        "sport": "Soccer"
    },
    "2151": {
        "name": "Senegal Super Cup",
        "sport": "Soccer"
    },
    "638": {
        "name": "Serbia Cup",
        "sport": "Soccer"
    },
    "929": {
        "name": "Serbia League Women",
        "sport": "Soccer"
    },
    "1164": {
        "name": "Serbia Prva Liga",
        "sport": "Soccer"
    },
    "909": {
        "name": "Serbia Srpska Liga",
        "sport": "Soccer"
    },
    "60": {
        "name": "Serbia Super Liga",
        "sport": "Soccer"
    },
    "939": {
        "name": "Serbia U19 League",
        "sport": "Soccer"
    },
    "7930": {
        "name": "Sheffield & Hallamshire Senior Cup",
        "sport": "Soccer"
    },
    "1830": {
        "name": "Singapore Cup",
        "sport": "Soccer"
    },
    "357": {
        "name": "Singapore Prime League",
        "sport": "Soccer"
    },
    "719": {
        "name": "Singapore S League",
        "sport": "Soccer"
    },
    "337": {
        "name": "Slovakia 2. Liga",
        "sport": "Soccer"
    },
    "1084": {
        "name": "Slovakia 3. Liga",
        "sport": "Soccer"
    },
    "703": {
        "name": "Slovakia Cup",
        "sport": "Soccer"
    },
    "1158": {
        "name": "Slovakia I Liga Women",
        "sport": "Soccer"
    },
    "51": {
        "name": "Slovakia Super Liga",
        "sport": "Soccer"
    },
    "688": {
        "name": "Slovakia Youth League",
        "sport": "Soccer"
    },
    "1165": {
        "name": "Slovenia 2. SNL",
        "sport": "Soccer"
    },
    "772": {
        "name": "Slovenia 3. SNL",
        "sport": "Soccer"
    },
    "1658": {
        "name": "Slovenia Cup",
        "sport": "Soccer"
    },
    "1091": {
        "name": "Slovenia Cup Women",
        "sport": "Soccer"
    },
    "940": {
        "name": "Slovenia League Women",
        "sport": "Soccer"
    },
    "164": {
        "name": "Slovenia Prva Liga",
        "sport": "Soccer"
    },
    "1689": {
        "name": "Slovenia U19 League",
        "sport": "Soccer"
    },
    "167": {
        "name": "South Africa Cup",
        "sport": "Soccer"
    },
    "7166": {
        "name": "South Africa Diski Challenge",
        "sport": "Soccer"
    },
    "1712": {
        "name": "South Africa League Cup",
        "sport": "Soccer"
    },
    "513": {
        "name": "South Africa National Div 1",
        "sport": "Soccer"
    },
    "654": {
        "name": "South Africa Premier",
        "sport": "Soccer"
    },
    "1087": {
        "name": "South Africa Supa 8 Cup",
        "sport": "Soccer"
    },
    "1028": {
        "name": "South America - World Cup Qualifying",
        "sport": "Soccer"
    },
    "6188": {
        "name": "South Asian Championship",
        "sport": "Soccer"
    },
    "1788": {
        "name": "South Korea Cup",
        "sport": "Soccer"
    },
    "380": {
        "name": "South Korea K-League Challenge",
        "sport": "Soccer"
    },
    "326": {
        "name": "South Korea K-League Classic",
        "sport": "Soccer"
    },
    "3447": {
        "name": "South Korea K-League Play Offs",
        "sport": "Soccer"
    },
    "1758": {
        "name": "South Korea K-League Women",
        "sport": "Soccer"
    },
    "1730": {
        "name": "South Korea K3 League",
        "sport": "Soccer"
    },
    "1731": {
        "name": "South Korea National League",
        "sport": "Soccer"
    },
    "1153": {
        "name": "Southern League Cup",
        "sport": "Soccer"
    },
    "1016": {
        "name": "Southern League Division One",
        "sport": "Soccer"
    },
    "609": {
        "name": "Southern League Premier",
        "sport": "Soccer"
    },
    "1150": {
        "name": "Spain Copa de Catalunya",
        "sport": "Soccer"
    },
    "1381": {
        "name": "Spain Copa del Rey",
        "sport": "Soccer"
    },
    "711": {
        "name": "Spain Copa Federacion",
        "sport": "Soccer"
    },
    "201": {
        "name": "Spain Primera Liga",
        "sport": "Soccer"
    },
    "914": {
        "name": "Spain Primera Women",
        "sport": "Soccer"
    },
    "1168": {
        "name": "Spain Regional League",
        "sport": "Soccer"
    },
    "125": {
        "name": "Spain Segunda",
        "sport": "Soccer"
    },
    "66": {
        "name": "Spain Segunda B Group 1",
        "sport": "Soccer"
    },
    "364": {
        "name": "Spain Segunda B Group 2",
        "sport": "Soccer"
    },
    "70": {
        "name": "Spain Segunda B Group 3",
        "sport": "Soccer"
    },
    "132": {
        "name": "Spain Segunda B Group 4",
        "sport": "Soccer"
    },
    "956": {
        "name": "Spain Segunda Women",
        "sport": "Soccer"
    },
    "382": {
        "name": "Spain Tercera Group 1",
        "sport": "Soccer"
    },
    "365": {
        "name": "Spain Tercera Group 10",
        "sport": "Soccer"
    },
    "138": {
        "name": "Spain Tercera Group 11",
        "sport": "Soccer"
    },
    "426": {
        "name": "Spain Tercera Group 12",
        "sport": "Soccer"
    },
    "353": {
        "name": "Spain Tercera Group 13",
        "sport": "Soccer"
    },
    "389": {
        "name": "Spain Tercera Group 14",
        "sport": "Soccer"
    },
    "540": {
        "name": "Spain Tercera Group 15",
        "sport": "Soccer"
    },
    "384": {
        "name": "Spain Tercera Group 16",
        "sport": "Soccer"
    },
    "385": {
        "name": "Spain Tercera Group 17",
        "sport": "Soccer"
    },
    "539": {
        "name": "Spain Tercera Group 18",
        "sport": "Soccer"
    },
    "43": {
        "name": "Spain Tercera Group 2",
        "sport": "Soccer"
    },
    "934": {
        "name": "Spain Tercera Group 3",
        "sport": "Soccer"
    },
    "362": {
        "name": "Spain Tercera Group 4",
        "sport": "Soccer"
    },
    "391": {
        "name": "Spain Tercera Group 5",
        "sport": "Soccer"
    },
    "393": {
        "name": "Spain Tercera Group 6",
        "sport": "Soccer"
    },
    "372": {
        "name": "Spain Tercera Group 7",
        "sport": "Soccer"
    },
    "537": {
        "name": "Spain Tercera Group 8",
        "sport": "Soccer"
    },
    "397": {
        "name": "Spain Tercera Group 9",
        "sport": "Soccer"
    },
    "10742": {
        "name": "Spain Women 1a Nacional",
        "sport": "Soccer"
    },
    "10743": {
        "name": "Spain Women 1a Nacional",
        "sport": "Soccer"
    },
    "1410": {
        "name": "Spain Women Superliga",
        "sport": "Soccer"
    },
    "3962": {
        "name": "Sri Lanka Champions League",
        "sport": "Soccer"
    },
    "1690": {
        "name": "Sudan Cup",
        "sport": "Soccer"
    },
    "709": {
        "name": "Sudan League",
        "sport": "Soccer"
    },
    "454": {
        "name": "Sweden 1.div Norra",
        "sport": "Soccer"
    },
    "521": {
        "name": "Sweden 1.div S\u00f6dra",
        "sport": "Soccer"
    },
    "774": {
        "name": "Sweden 2.div Norra G\u00f6taland",
        "sport": "Soccer"
    },
    "592": {
        "name": "Sweden 2.div Norra Svealand",
        "sport": "Soccer"
    },
    "775": {
        "name": "Sweden 2.div Norrland",
        "sport": "Soccer"
    },
    "15193": {
        "name": "Sweden 2.div \u00d6stra G\u00f6taland",
        "sport": "Soccer"
    },
    "500": {
        "name": "Sweden 2.div S\u00f6dra G\u00f6taland",
        "sport": "Soccer"
    },
    "523": {
        "name": "Sweden 2.div S\u00f6dra Svealand",
        "sport": "Soccer"
    },
    "773": {
        "name": "Sweden 2.div V\u00e4stra G\u00f6taland",
        "sport": "Soccer"
    },
    "15661": {
        "name": "Sweden 3.div Mellersta G\u00f6taland",
        "sport": "Soccer"
    },
    "15659": {
        "name": "Sweden 3.div Mellersta Norrland",
        "sport": "Soccer"
    },
    "536": {
        "name": "Sweden 3.div Nord\u00f6stra G\u00f6taland",
        "sport": "Soccer"
    },
    "15274": {
        "name": "Sweden 3.div Nordv\u00e4stra G\u00f6taland",
        "sport": "Soccer"
    },
    "538": {
        "name": "Sweden 3.div Norra Norrland",
        "sport": "Soccer"
    },
    "78": {
        "name": "Sweden 3.div \u00d6stra Svealand",
        "sport": "Soccer"
    },
    "15194": {
        "name": "Sweden 3.div S\u00f6dra G\u00f6taland",
        "sport": "Soccer"
    },
    "15195": {
        "name": "Sweden 3.div S\u00f6dra Norrland",
        "sport": "Soccer"
    },
    "502": {
        "name": "Sweden 3.div S\u00f6dra Svealand",
        "sport": "Soccer"
    },
    "458": {
        "name": "Sweden 3.div Syd\u00f6stra G\u00f6taland",
        "sport": "Soccer"
    },
    "15196": {
        "name": "Sweden 3.div Sydv\u00e4stra G\u00f6taland",
        "sport": "Soccer"
    },
    "15197": {
        "name": "Sweden 3.div V\u00e4stra Svealand",
        "sport": "Soccer"
    },
    "491": {
        "name": "Sweden Allsvenskan",
        "sport": "Soccer"
    },
    "1487": {
        "name": "Sweden Cup",
        "sport": "Soccer"
    },
    "1379": {
        "name": "Sweden Cup Women",
        "sport": "Soccer"
    },
    "949": {
        "name": "Sweden Damallsvenskan",
        "sport": "Soccer"
    },
    "1161": {
        "name": "Sweden Div 2 Qualification",
        "sport": "Soccer"
    },
    "649": {
        "name": "Sweden Elitettan",
        "sport": "Soccer"
    },
    "1011": {
        "name": "Sweden Folksam U21",
        "sport": "Soccer"
    },
    "642": {
        "name": "Sweden Juniorallsvenskan",
        "sport": "Soccer"
    },
    "535": {
        "name": "Sweden Superettan",
        "sport": "Soccer"
    },
    "2646": {
        "name": "Sweden Superettan Qualification",
        "sport": "Soccer"
    },
    "3148": {
        "name": "Sweden U19 Cup",
        "sport": "Soccer"
    },
    "659": {
        "name": "Sweden U19 Division 1",
        "sport": "Soccer"
    },
    "3061": {
        "name": "Swedish Allsvenskan Qualification",
        "sport": "Soccer"
    },
    "76": {
        "name": "Swiss Cup",
        "sport": "Soccer"
    },
    "1149": {
        "name": "Switzerland 1.Liga Classic",
        "sport": "Soccer"
    },
    "1167": {
        "name": "Switzerland 1.Liga Promotion",
        "sport": "Soccer"
    },
    "665": {
        "name": "Switzerland Challenge League",
        "sport": "Soccer"
    },
    "12575": {
        "name": "Switzerland Division 1 Women",
        "sport": "Soccer"
    },
    "595": {
        "name": "Switzerland Super League",
        "sport": "Soccer"
    },
    "628": {
        "name": "Tanzania Premier League",
        "sport": "Soccer"
    },
    "692": {
        "name": "Thailand Cup",
        "sport": "Soccer"
    },
    "421": {
        "name": "Thailand Division 1",
        "sport": "Soccer"
    },
    "356": {
        "name": "Thailand Division 2",
        "sport": "Soccer"
    },
    "9183": {
        "name": "Thailand Division 3",
        "sport": "Soccer"
    },
    "9240": {
        "name": "Thailand Division 4",
        "sport": "Soccer"
    },
    "10380": {
        "name": "Thailand League Cup",
        "sport": "Soccer"
    },
    "419": {
        "name": "Thailand Premier League",
        "sport": "Soccer"
    },
    "7859": {
        "name": "Thailand Super Cup",
        "sport": "Soccer"
    },
    "2167": {
        "name": "Thailand U19 League",
        "sport": "Soccer"
    },
    "6625": {
        "name": "Tipsport Liga",
        "sport": "Soccer"
    },
    "4142": {
        "name": "Togo Premier Division",
        "sport": "Soccer"
    },
    "2531": {
        "name": "Trinidad & Tobago League Cup",
        "sport": "Soccer"
    },
    "1058": {
        "name": "Trinidad & Tobago Pro League",
        "sport": "Soccer"
    },
    "3470": {
        "name": "Trinidad & Tobago Super League",
        "sport": "Soccer"
    },
    "5092": {
        "name": "Tunisia Cup",
        "sport": "Soccer"
    },
    "533": {
        "name": "Tunisia League 1",
        "sport": "Soccer"
    },
    "6668": {
        "name": "Tunisia League 2",
        "sport": "Soccer"
    },
    "7908": {
        "name": "Tunisia U21 League",
        "sport": "Soccer"
    },
    "496": {
        "name": "Turkey 1 Lig",
        "sport": "Soccer"
    },
    "81": {
        "name": "Turkey 2 Lig Beyaz",
        "sport": "Soccer"
    },
    "1339": {
        "name": "Turkey 2 Lig Kirmizi",
        "sport": "Soccer"
    },
    "1085": {
        "name": "Turkey 3.Lig Group 1",
        "sport": "Soccer"
    },
    "1338": {
        "name": "Turkey 3.Lig Group 2",
        "sport": "Soccer"
    },
    "1340": {
        "name": "Turkey 3.Lig Group 3",
        "sport": "Soccer"
    },
    "625": {
        "name": "Turkey Cup",
        "sport": "Soccer"
    },
    "97": {
        "name": "Turkey Super Lig",
        "sport": "Soccer"
    },
    "938": {
        "name": "Turkey U19 League",
        "sport": "Soccer"
    },
    "945": {
        "name": "Turkey U21 1 Lig",
        "sport": "Soccer"
    },
    "605": {
        "name": "Turkey U21 Super Lig",
        "sport": "Soccer"
    },
    "3074": {
        "name": "Turkey Womens League",
        "sport": "Soccer"
    },
    "644": {
        "name": "U19 International",
        "sport": "Soccer"
    },
    "2929": {
        "name": "U19 Tournament",
        "sport": "Soccer"
    },
    "3035": {
        "name": "U19 Tournament - 80 mins play",
        "sport": "Soccer"
    },
    "1147": {
        "name": "U20 International",
        "sport": "Soccer"
    },
    "7486": {
        "name": "U20 South American Championships",
        "sport": "Soccer"
    },
    "11242": {
        "name": "U20 Tournament - 80 mins play",
        "sport": "Soccer"
    },
    "1145": {
        "name": "U21 International",
        "sport": "Soccer"
    },
    "3368": {
        "name": "U23 International",
        "sport": "Soccer"
    },
    "1057": {
        "name": "UAE Cup",
        "sport": "Soccer"
    },
    "2748": {
        "name": "UAE Division 1",
        "sport": "Soccer"
    },
    "517": {
        "name": "UAE Premier League",
        "sport": "Soccer"
    },
    "760": {
        "name": "UAE Reserve League",
        "sport": "Soccer"
    },
    "1653": {
        "name": "UAE U19 Cup",
        "sport": "Soccer"
    },
    "1511": {
        "name": "UAE U19 League",
        "sport": "Soccer"
    },
    "601": {
        "name": "UEFA Champions League",
        "sport": "Soccer"
    },
    "602": {
        "name": "UEFA Europa League",
        "sport": "Soccer"
    },
    "1142": {
        "name": "UEFA Womens Champions League",
        "sport": "Soccer"
    },
    "705": {
        "name": "UEFA Youth League",
        "sport": "Soccer"
    },
    "7813": {
        "name": "Uganda Cup",
        "sport": "Soccer"
    },
    "1512": {
        "name": "Uganda Division 2",
        "sport": "Soccer"
    },
    "635": {
        "name": "Uganda Premier League",
        "sport": "Soccer"
    },
    "1159": {
        "name": "UK Friendlies",
        "sport": "Soccer"
    },
    "697": {
        "name": "Ukraine Cup",
        "sport": "Soccer"
    },
    "752": {
        "name": "Ukraine Cup Women",
        "sport": "Soccer"
    },
    "1745": {
        "name": "Ukraine Division 1 Women",
        "sport": "Soccer"
    },
    "431": {
        "name": "Ukraine Persha Liga",
        "sport": "Soccer"
    },
    "755": {
        "name": "Ukraine Reserve League",
        "sport": "Soccer"
    },
    "409": {
        "name": "Ukraine Vyscha Liga",
        "sport": "Soccer"
    },
    "386": {
        "name": "Ukraine Youth League",
        "sport": "Soccer"
    },
    "181": {
        "name": "Uruguay Apertura",
        "sport": "Soccer"
    },
    "230": {
        "name": "Uruguay Reserve League",
        "sport": "Soccer"
    },
    "193": {
        "name": "Uruguay Segunda",
        "sport": "Soccer"
    },
    "200": {
        "name": "Uruguay Segunda",
        "sport": "Soccer"
    },
    "1135": {
        "name": "Uruguay U19 League",
        "sport": "Soccer"
    },
    "5751": {
        "name": "USA - College Cup",
        "sport": "Soccer"
    },
    "905": {
        "name": "USA College Championship",
        "sport": "Soccer"
    },
    "960": {
        "name": "USA College Championship Women",
        "sport": "Soccer"
    },
    "231": {
        "name": "USA MLS",
        "sport": "Soccer"
    },
    "274": {
        "name": "USA NASL",
        "sport": "Soccer"
    },
    "12235": {
        "name": "USA NPSL",
        "sport": "Soccer"
    },
    "936": {
        "name": "USA NWSL Women",
        "sport": "Soccer"
    },
    "4131": {
        "name": "USA TPSL",
        "sport": "Soccer"
    },
    "256": {
        "name": "USA USL Pro",
        "sport": "Soccer"
    },
    "716": {
        "name": "Venezuela Cup",
        "sport": "Soccer"
    },
    "229": {
        "name": "Venezuela Primera Division",
        "sport": "Soccer"
    },
    "221": {
        "name": "Venezuela Segunda Division",
        "sport": "Soccer"
    },
    "5673": {
        "name": "Venezuelan Finals",
        "sport": "Soccer"
    },
    "11413": {
        "name": "Viareggio Cup",
        "sport": "Soccer"
    },
    "921": {
        "name": "Vietnam Cup",
        "sport": "Soccer"
    },
    "3365": {
        "name": "Vietnam Division 3",
        "sport": "Soccer"
    },
    "6486": {
        "name": "Vietnam U19 Championship",
        "sport": "Soccer"
    },
    "1141": {
        "name": "Vietnam U21 Championship",
        "sport": "Soccer"
    },
    "368": {
        "name": "Vietnam V-League",
        "sport": "Soccer"
    },
    "9191": {
        "name": "Vietnam V-League 2",
        "sport": "Soccer"
    },
    "2267": {
        "name": "Wales Cup",
        "sport": "Soccer"
    },
    "1691": {
        "name": "Wales Cymru Alliance",
        "sport": "Soccer"
    },
    "1136": {
        "name": "Wales League Cup",
        "sport": "Soccer"
    },
    "781": {
        "name": "Wales League Division 1",
        "sport": "Soccer"
    },
    "5656": {
        "name": "Wales League Division 2",
        "sport": "Soccer"
    },
    "519": {
        "name": "Wales Premier League",
        "sport": "Soccer"
    },
    "5537": {
        "name": "Womens Copa Libertadores",
        "sport": "Soccer"
    },
    "639": {
        "name": "Womens Euro Championships Qual",
        "sport": "Soccer"
    },
    "6832": {
        "name": "Womens Friendly",
        "sport": "Soccer"
    },
    "435": {
        "name": "Womens International",
        "sport": "Soccer"
    },
    "1662": {
        "name": "Womens U19 Euro Championships",
        "sport": "Soccer"
    },
    "2921": {
        "name": "Womens U20 World Championships",
        "sport": "Soccer"
    },
    "14537": {
        "name": "Womens World Cup Qual",
        "sport": "Soccer"
    },
    "1144": {
        "name": "World Club Friendlies",
        "sport": "Soccer"
    },
    "2524": {
        "name": "Youth International",
        "sport": "Soccer"
    },
    "3098": {
        "name": "Youth Tournament",
        "sport": "Soccer"
    },
    "4380": {
        "name": "Zambia Super League",
        "sport": "Soccer"
    }
};
