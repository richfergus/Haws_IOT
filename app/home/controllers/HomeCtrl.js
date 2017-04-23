// 'use strict';

var app = angular.module('app.home');

app.controller("timeDataController", ["$scope", "$firebaseObject",
    function($scope, $firebaseObject) {

        var ref = firebase.database().ref();

        var vertexRef = ref.child('vertex');
        // var firstNode = vertexRef.child('my first node');
        // $scope.syncData = $firebaseObject(ref);

        vertexRef.on("value", function(snapshot) {
            console.log(snapshot.val());
            $scope.showerTests = snapshot.val();
        });


    }
]);

app.controller("HomeController", ["$scope", "$firebaseObject",
    function($scope, $firebaseObject) {
        var showerTestDT = moment().format("YYYY-MM-DD:HH:MM:sss");
        var ref = firebase.database().ref();
        var firebaseObj = $firebaseObject(ref).$bindTo($scope, "syncData");
        $scope.turnOn = function() {
            console.log('on');
            var vertexRef = ref.child('vertex');
            var firstNode = vertexRef.child(showerTestDT);
            firstNode.set({
                datetime: showerTestDT,
                label: 'I am blue'
            });
            $scope.syncData.Shower = 'on';
        };
        $scope.turnOff = function() {
            console.log('off');
            $scope.syncData.Shower = 'off';
        };
        // var showerData = {
        //         labels : ["January","February","March","April","May","June"],
        //         datasets :
        //          [
        //             {
        //               fillColor : "rgba(172,194,132,0.4)",
        //               strokeColor : "#ACC26D",
        //               pointColor : "#fff",
        //               pointStrokeColor : "#9DB86D",
        //               data : [0,1,1,0,1,1]
        //             }
        //          ]
        //         };

        //           var showerChart = document.getElementById('showerChart').getContext('2d');
        //                new Chart(showerChart).Line(showerData);    
    }
]);