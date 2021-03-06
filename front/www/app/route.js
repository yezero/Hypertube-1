angular
    .module('hypertube')
    .config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
        $routeProvider
            // --------------- TEMP TO DELETE
            .when('/tempTest', {
                templateUrl: 'temp/omniauth.html',
                controller: 'omniauthController',
                access: {
                    redirection: '/',
                    rule: 'onlyGuest'
                }
            })
            // --------------- TEMP TO DELETE
            .when('/sign', {
                templateUrl: 'partials/sign.html',
                controller: 'signController',
                access: {
                    redirection: '/',
                    rule: 'onlyGuest'
                }
            })
            .when('/lost', {
                templateUrl: 'partials/lost.html',
                controller: 'lostController',
                access: {
                    redirection: '/',
                    rule: 'onlyGuest'
                }
            })
            .when('/signOut', {
                templateUrl: 'partials/sign.html',
                controller: 'signOutController',
                access: {
                    redirection: '/sign',
                    rule: 'onlyGuest'
                }
            })
            .when('/sign/:emailToken?', {
                templateUrl: 'partials/signToken.html',
                controller: 'signTokenController',
                access: {
                    redirection: '/',
                    rule: 'onlyGuest'
                }
            })
            .when('/email/:emailToken', {
                templateUrl: 'partials/signToken.html',
                controller: 'emailTokenController',
                access: {
                    redirection: '/',
                    rule: 'onlyGuest'
                }
            })
            .when('/profil', {
                templateUrl: 'partials/profil.html',
                controller: 'profilController',
                access: {
                    redirection: '/sign',
                    rule: 'onlyGuest'
                }
            })
            .when('/profil/:pseudo', {
                templateUrl: 'partials/profil.html',
                controller: 'profilController',
                access: {
                    redirection: '/sign',
                    rule: 'onlyGuest'
                }
            })
            .when('/', {
                templateUrl: 'partials/search.html',
                controller: 'searchController',
                access: {
                    redirection: '/sign',
                    rule: 'onlyGuest'
                }
            })
            .when('/t/:imdbToken', {
                templateUrl: 'partials/search.html',
                controller: 'searchController',
                access: {
                    redirection: '/sign',
                    rule: 'onlyGuest'
                }
            })
            .when('/player/:idMovie', {
                templateUrl: 'partials/player.html',
                controller: 'playerController',
                access: {
                    redirection: '/sign',
                    rule: 'onlyGuest'
                }
            })
            .otherwise({redirectTo : '/sign'});
        $locationProvider.html5Mode(true);
    }]);
