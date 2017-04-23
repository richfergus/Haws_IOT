"use strict";


angular.module('app.home', ['ui.router', 'app.graphs'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.home', {
            url: '/home',
            data: {
                title: 'Welcome'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/home/views/home.html',
                    controller: 'HomeController'
                },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.graphs.js'
                    ]);
                }
            }


            }
        })
         .state('app.showerData', {
            url: '/timedata',
            data: {
                title: 'Time Data'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/home/views/timedata.html',
                    controller: 'timeDataController'
                }
            },
            resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.graphs.js'
                    ]);
                }
            }
        });
});

