(function () {

  var app = angular.module('pokedex', [
    'ngRoute',
    'pokedex.controllers',
    'pokedex.directives',
    'pokedex.filters',
    'pokedex.services'
  ]);

  app.config(['$routeProvider', function ($routeProvider) {

    $routeProvider
      .when('/example-pokedex/', {
        templateUrl: 'views/pokedex.html',
        controller: 'PokedexController'
      })
      .when('/example-pokedex/:type', {
        templateUrl: 'views/pokedex.html',
        controller: 'PokedexController'
      })
      .when('/example-pokedex/pokemon/:name', {
        templateUrl: 'views/pokemon.html',
        controller: 'PokemonController'
      })
      .otherwise({
        redirectTo: '/'
      });

  }]);

})();
